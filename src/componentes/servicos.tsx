import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Servicos() {
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
    const [mostrarModalListagem, setMostrarModalListagem] = useState(false);
    const [mostrarModalAtualizar, setMostrarModalAtualizar] = useState(false);
    const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);
    const [step, setStep] = useState(1);

    const [servicos, setServicos] = useState<{ id: number; nome: string; preco: string; consumo: number }[]>([
        { id: 1, nome: "Consulta", preco: "50.00", consumo: 10 },
        { id: 2, nome: "Vacinação", preco: "20.00", consumo: 5 },
        { id: 3, nome: "Banho", preco: "30.00", consumo: 15 },
        { id: 4, nome: "Tosa", preco: "40.00", consumo: 8 },
    ]);

    const [servico, setServico] = useState({
        id: "",
        nome: "",
        preco: "",
        consumo: "",
    });

    const [idPesquisa, setIdPesquisa] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setServico({ ...servico, [e.target.name]: e.target.value });
    };

    const handleIdPesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdPesquisa(e.target.value);
    };

    const atualizarServico = () => {
        const servicoAtualizado = servicos.map((serv) =>
            serv.id === parseInt(idPesquisa) ? {
                ...serv,
                nome: servico.nome,
                preco: servico.preco,
                consumo: parseInt(servico.consumo)
            } : serv
        );
        setServicos(servicoAtualizado);
        setMostrarModalAtualizar(false);
        setIdPesquisa("");
        setStep(1);
        setServico({ id: "", nome: "", preco: "", consumo: "" });
    };

    const next = () => setStep(prev => prev + 1);
    const back = () => setStep(prev => prev - 1);

    const salvar = () => {
        const novoServico = {
            ...servico,
            id: servicos.length + 1,
            consumo: parseInt(servico.consumo)
        };
        setServicos([...servicos, novoServico]);
        setMostrarModalCadastro(false);
        setStep(1);
        setServico({ id: "", nome: "", preco: "", consumo: "" });
    };

    const [idExclusao, setIdExclusao] = useState("");

    const excluirServico = () => {
        setServicos(servicos.filter(serv => serv.id !== parseInt(idExclusao)));
        setIdExclusao("");
    };

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
                <img src="/servico.png" style={{ width: "70px" }} />
                <h1 style={{ fontSize: "300%" }}>Menu de Serviços</h1>
            </div>

            <hr className="line" />
            <h5 className="subtitle mt-5">Nos blocos abaixo, você poderá gerenciar os dados dos seus serviços.</h5>

            <div className="container mt-5">
                <div className="row justify-content-center">

                    {/* Modal Cadastro */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Cadastrar Serviço</h5>
                                <p className="card-text text-center subtitleCard">Preencha os dados do novo serviço</p>
                                <div className="text-center mb-3">
                                    <img src="cadastro.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Serviço" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalCadastro(true)}>
                                        📝Cadastrar Serviço
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalCadastro} onHide={() => setMostrarModalCadastro(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Cadastro de Serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Serviço</Form.Label>
                                        <Form.Control name="nome" value={servico.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control name="preco" value={servico.preco} onChange={handleChange} />
                                    </Form.Group>
                                    
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <p>Confirme os dados:</p>
                                    <ul>
                                        <li><strong>Id do Serviço: 1</strong> {servico.id}</li>
                                        <li><strong>Nome do Serviço:</strong> {servico.nome}</li>
                                        <li><strong>Preço:</strong> {servico.preco}</li>
                                        
                                    </ul>
                                </>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            {step > 1 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={back}>⬅Voltar</Button>}
                            {step < 2 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={next}>Próximo➡️</Button>}
                            {step === 2 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={salvar}>📝Cadastrar</Button>}
                        </Modal.Footer>
                    </Modal>

                    {/* Modal Listagem */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Listar Serviços</h5>
                                <p className="card-text text-center subtitleCard">Visualize todos os serviços cadastrados</p>
                                <div className="text-center mb-3">
                                    <img src="listagem.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Serviço" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalListagem(true)}>
                                        📋Listar Serviços
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalListagem} onHide={() => setMostrarModalListagem(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Listagem de Serviços</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {servicos.length === 0 ? (
                                <p>Nenhum serviço cadastrado.</p>
                            ) : (
                                servicos.map((serv, index) => (
                                    <div key={index}>
                                        <p><strong>Nome do Serviço:</strong> {serv.nome}</p>
                                        <p><strong>Preço:</strong> {serv.preco}</p>
                                        <p><strong>Consumo:</strong> {serv.consumo} serviços</p>
                                        {index < servicos.length - 1 && <hr />}
                                    </div>
                                ))
                            )}
                        </Modal.Body>
                    </Modal>

                    {/* Modal Atualizar Serviço */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Atualizar Serviço</h5>
                                <p className="card-text text-center subtitleCard">Altere os dados de um serviço existente</p>
                                <div className="text-center mb-3">
                                    <img src="atualizaçao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Serviço" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalAtualizar(true)}>
                                        ✏️Atualizar Serviço
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalAtualizar} onHide={() => setMostrarModalAtualizar(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Atualização de Serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <Form.Group className="mb-3">
                                <Form.Label>ID do Serviço</Form.Label>
                                <Form.Control type="text" value={idPesquisa} onChange={handleIdPesquisaChange} />
                            </Form.Group>
                            {servicos.filter(serv => serv.id === parseInt(idPesquisa)).map((serv, index) => (
                                <div key={index}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Serviço</Form.Label>
                                        <Form.Control name="nome" value={servico.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control name="preco" value={servico.preco} onChange={handleChange} />
                                    </Form.Group>
                                    
                                </div>
                            ))}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={atualizarServico}>Atualizar Serviço</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal Exclusão */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Excluir Serviço</h5>
                                <p className="card-text text-center subtitleCard">Exclua um serviço existente no sistema</p>
                                <div className="text-center mb-3">
                                    <img src="exclusao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Serviço" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalExclusao(true)}>
                                        ❌Excluir Serviço
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalExclusao} onHide={() => setMostrarModalExclusao(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Excluir Serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <Form.Group className="mb-3">
                                <Form.Label>ID do Serviço</Form.Label>
                                <Form.Control type="text" value={idExclusao} onChange={(e) => setIdExclusao(e.target.value)} />
                            </Form.Group>
                            <Button variant="danger" onClick={excluirServico}>Excluir Serviço</Button>
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
        </div>
    );
}
