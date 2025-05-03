import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Clientes() {
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
    const [mostrarModalListagem, setMostrarModalListagem] = useState(false);
    const [mostrarModalAtualizar, setMostrarModalAtualizar] = useState(false);
    const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);
    const [step, setStep] = useState(1);
    const [clientes, setClientes] = useState([
        {
            nome: "Mike Shinoda",
            nomeSocial: "Mike",
            ddd: "11",
            telefone: "91234-5678",
            pets: "Shinodinho",
            cpf: " "
        },
        {
            nome: "Emily Armstrong",
            nomeSocial: "Emy",
            ddd: "11",
            telefone: "99876-5432",
            pets: "Emilinha"
        },
        {
            nome: "Chester Bennington",
            nomeSocial: "Chazy",
            ddd: "11",
            telefone: "91345-6789",
            pets: "Rocky"
        },

        {
            nome: "Fernando Badauí",
            nomeSocial: "Badauí",
            ddd: "11",
            telefone: "91234-9876",
            pets: "Badão"

        },
        {
            nome: "Marcelo Falcão",
            nomeSocial: "Rappa",
            ddd: "11",
            telefone: "99887-6655",
            pets: "Rappinha"
        },
        {
            nome: "Alexandre Carlo",
            nomeSocial: "Alex Natiruts",
            ddd: "11",
            telefone: "91122-3344",
            pets: "Naty"

        },
        {
            nome: "Tales de Polli",
            nomeSocial: "Maneva",
            ddd: "11",
            telefone: "98765-4321",
            pets: "Manequinho"
        },
        {
            nome: "Aguiar Madeira",
            nomeSocial: "Digão Raimundo",
            ddd: "11",
            telefone: "90011-2233",
            pets: "Raimundinho"
        },
        {
            nome: "Armando Antônio",
            nomeSocial: "Armandinho",
            ddd: "11",
            telefone: "94455-6677",
            pets: "Mandinho"
        },
        {
            nome: "Tico Santa Cruz",
            nomeSocial: "Tiquinho Detonauta",
            ddd: "11",
            telefone: "95566-7788",
            pets: "Peixonauta"
        }

    ]);

    const [cliente, setCliente] = useState({
        nome: "",
        nomeSocial: "",
        ddd: "",
        telefone: "",
        pets: "",
        rg: "",
        rgEmissao: "",
        cpf: "",
        cpfEmissao: ""
    });

    const [cpfPesquisa, setCpfPesquisa] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleCpfPesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpfPesquisa(e.target.value);
    };

    const atualizarCliente = () => {
        const clienteAtualizado = clientes.map((cli) =>
            cli.cpf === cpfPesquisa ? { ...cli, ...cliente } : cli
        );
        setClientes(clienteAtualizado);
        setMostrarModalAtualizar(false);
        setCpfPesquisa("");
        setStep(1);
        setCliente({
            nome: "",
            nomeSocial: "",
            ddd: "",
            pets: "",
            telefone: "",
            rg: "",
            rgEmissao: "",
            cpf: "",
            cpfEmissao: "",
        });
    };

    const next = () => setStep(prev => prev + 1);
    const back = () => setStep(prev => prev - 1);

    const salvar = () => {
        setClientes([...clientes, cliente]);
        setMostrarModalCadastro(false);
        setStep(1);
        setCliente({
            nome: "",
            nomeSocial: "",
            ddd: "",
            telefone: "",
            pets: "",
            rg: "",
            rgEmissao: "",
            cpf: "",
            cpfEmissao: ""
        });
    };


    const [cpfExclusao, setCpfExclusao] = useState("");

    const excluirCliente = () => {
        setClientes(clientes.filter(cli => cli.cpf !== cpfExclusao));
        setCpfExclusao("");

    };

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
                <img src="/cliente.png" style={{ width: "70px" }} />
                <h1 style={{ fontSize: "300%" }}>Menu de Clientes</h1>
            </div>

            <hr className="line" />
            <h5 className="subtitle mt-5">Nos blocos abaixo, você poderá gerenciar os dados dos seus clientes.</h5>

            <div className="container mt-5">
                <div className="row justify-content-center">

                    {/* Modal Cadastro */}

                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Cadastrar Cliente</h5>
                                <p className="card-text text-center subtitleCard">Preencha os dados do novo cliente </p>
                                <div className="text-center mb-3">
                                    <img src="cadastro.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Cliente" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalCadastro(true)}>
                                        📝Cadastrar Cliente
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Modal show={mostrarModalCadastro} onHide={() => setMostrarModalCadastro(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Cadastro de Cliente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome Completo</Form.Label>
                                        <Form.Control name="nome" value={cliente.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome Social</Form.Label>
                                        <Form.Control name="nomeSocial" value={cliente.nomeSocial} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Telefone</Form.Label>
                                        <div className="d-flex gap-2">
                                            <Form.Control placeholder="DDD" style={{ maxWidth: '80px' }} name="ddd" value={cliente.ddd} onChange={handleChange} />
                                            <Form.Control placeholder="Número" name="telefone" value={cliente.telefone} onChange={handleChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>RG</Form.Label>
                                        <Form.Control name="rg" value={cliente.rg} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data de Emissão do RG</Form.Label>
                                        <Form.Control type="date" name="rgEmissao" value={cliente.rgEmissao} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>CPF</Form.Label>
                                        <Form.Control name="cpf" value={cliente.cpf} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data de Emissão do CPF</Form.Label>
                                        <Form.Control type="date" name="cpfEmissao" value={cliente.cpfEmissao} onChange={handleChange} />
                                    </Form.Group>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <p>Confirme os dados:</p>
                                    <ul>
                                        <li><strong>Nome Completo:</strong> {cliente.nome}</li>
                                        <li><strong>Nome Social:</strong> {cliente.nomeSocial}</li>
                                        <li><strong>Telefone:</strong> ({cliente.ddd}) {cliente.telefone}</li>
                                        <li><strong>RG:</strong> {cliente.rg}</li>
                                        <li><strong>Data de Emissão do RG:</strong> {cliente.rgEmissao}</li>
                                        <li><strong>CPF:</strong> {cliente.cpf}</li>
                                        <li><strong>Data de Emissão do CPF:</strong> {cliente.cpfEmissao}</li>
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
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Listar Clientes</h5>
                                <p className="card-text text-center subtitleCard">Visualize todos os clientes cadastrados</p>
                                <div className="text-center mb-3">
                                    <img src="listagem.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Cliente" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalListagem(true)}>
                                        📋Listar Clientes
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>






                    <Modal show={mostrarModalListagem} onHide={() => setMostrarModalListagem(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Listagem de Clientes</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {clientes.length === 0 ? (
                                <p>Nenhum cliente cadastrado.</p>
                            ) : (
                                clientes.map((cli, index) => (
                                    <div key={index}>
                                        <p><strong>Nome Completo:</strong> {cli.nome}</p>
                                        <p><strong>Nome Social:</strong> {cli.nomeSocial}</p>
                                        <p><strong>Telefone:</strong> ({cli.ddd}) {cli.telefone}</p>
                                        <p><strong>Seus pets:</strong> {cli.pets}</p>
                                        {index < clientes.length - 1 && <hr />}
                                    </div>
                                ))
                            )}
                        </Modal.Body>
                    </Modal>

                    {/* Modal Atualizar Cliente */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Atualizar Cliente</h5>
                                <p className="card-text text-center subtitleCard">Altere os dados de um cliente existente</p>
                                <div className="text-center mb-3">
                                    <img src="atualizaçao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Atualizar Cliente" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalAtualizar(true)}>
                                    🛠️Atualizar Cliente
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Modal Atualização */}
                    < Modal show={mostrarModalAtualizar} onHide={() => setMostrarModalAtualizar(false)
                    } centered size="lg" >
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Atualizar Cliente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o CPF do cliente para atualização</Form.Label>
                                    <Form.Control name="cpfPesquisa" value={cpfPesquisa} onChange={handleCpfPesquisaChange} />
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome Completo</Form.Label>
                                        <Form.Control name="nome" value={cliente.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome Social</Form.Label>
                                        <Form.Control name="nomeSocial" value={cliente.nomeSocial} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Telefone</Form.Label>
                                        <div className="d-flex gap-2">
                                            <Form.Control placeholder="DDD" style={{ maxWidth: '80px' }} name="ddd" value={cliente.ddd} onChange={handleChange} />
                                            <Form.Control placeholder="Número" name="telefone" value={cliente.telefone} onChange={handleChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>RG</Form.Label>
                                        <Form.Control name="rg" value={cliente.rg} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data de emissão do RG</Form.Label>
                                        <Form.Control  type="date" name="rgEmissao" value={cliente.rgEmissao} onChange={handleChange} />
                                    </Form.Group>

                                </>
                            )}
                            {step === 3 && (
                                <ul>
                                    <li><strong>Nome Completo:</strong> {cliente.nome}</li>
                                    <li><strong>Nome Social:</strong> {cliente.nomeSocial}</li>
                                    <li><strong>Telefone:</strong> ({cliente.ddd}) {cliente.telefone}</li>
                                    <li><strong>RG:</strong> {cliente.rg}</li>
                                    <li><strong>Data de Emissão do RG:</strong> {cliente.rgEmissao}</li>
                                </ul>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            {step > 1 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={back}>⬅Voltar</Button>}
                            {step < 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={next}>Próximo➡️</Button>}
                            {step === 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={atualizarCliente}>🛠️ Atualizar Cliente</Button>}
                        </Modal.Footer>
                    </Modal >






                    {/* Modal Exclusão */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Excluir Cliente</h5>
                                <p className="card-text text-center subtitleCard">Remova o registro do cliente no sistema</p>
                                <div className="text-center mb-3">
                                    <img src="exclusao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Excluir Cliente" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        variant="warning"
                                        className="mt-3 btn text-white"
                                        style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                                        onClick={() => setMostrarModalExclusao(true)}
                                    >
                                        🗑️Excluir Cliente
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalExclusao} onHide={() => setMostrarModalExclusao(false)} centered>
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Excluir Cliente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <Form.Group className="mb-3">
                                <Form.Label>Digite o CPF do cliente a ser excluído</Form.Label>
                                <Form.Control value={cpfExclusao} onChange={(e) => setCpfExclusao(e.target.value)} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            <Button
                                style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                                onClick={() => {
                                    excluirCliente();
                                    setMostrarModalExclusao(false);
                                }}
                            >
                                 🗑️ Confirmar Exclusão
                            </Button>
                        </Modal.Footer>
                    </Modal>



                </div>
            </div >
        </div>
    );
}
