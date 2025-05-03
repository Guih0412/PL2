import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Produtos() {
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
    const [mostrarModalListagem, setMostrarModalListagem] = useState(false);
    const [mostrarModalAtualizar, setMostrarModalAtualizar] = useState(false);
    const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);
    const [step, setStep] = useState(1);


    const [produtos, setProdutos] = useState<{ id: number; nome: string; preco: string; estoque: number; consumo: number }[]>([
        { id: 1, nome: "Shampoo", preco: "10.00", estoque: 100, consumo: 20 },
        { id: 2, nome: "Ração", preco: "20.00", estoque: 150, consumo: 20 },
        { id: 3, nome: "Coleira", preco: "30.00", estoque: 200, consumo: 20 },
        { id: 4, nome: "Roupinha", preco: "40.00", estoque: 250, consumo: 20 },
    ]);


    const [produto, setProduto] = useState({
        id: "",
        nome: "",
        preco: "",
        estoque: "",
        consumo: "",
    });

    const [idPesquisa, setIdPesquisa] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    };

    const handleIdPesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdPesquisa(e.target.value);
    };

    const atualizarProduto = () => {
        const produtoAtualizado = produtos.map((prod) =>
            prod.id === parseInt(idPesquisa) ? {
                ...prod,
                nome: produto.nome,
                preco: produto.preco,
                estoque: parseInt(produto.estoque),
                consumo: parseInt(produto.consumo)
            } : prod
        );
        setProdutos(produtoAtualizado);
        setMostrarModalAtualizar(false);
        setIdPesquisa("");
        setStep(1);
        setProduto({ id: "", nome: "", preco: "", estoque: "", consumo: "" });
    };

    const next = () => setStep(prev => prev + 1);
    const back = () => setStep(prev => prev - 1);

    const salvar = () => {
        const novoProduto = {
            ...produto,
            id: produtos.length + 1,
            estoque: parseInt(produto.estoque),
            consumo: parseInt(produto.consumo)
        };
        setProdutos([...produtos, novoProduto]);
        setMostrarModalCadastro(false);
        setStep(1);
        setProduto({ id: "", nome: "", preco: "", estoque: "", consumo: "" });
    };

    const [idExclusao, setIdExclusao] = useState("");

    const excluirProduto = () => {
        setProdutos(produtos.filter(prod => prod.id !== parseInt(idExclusao)));
        setIdExclusao("");
    };

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
                <img src="/produto.png" style={{ width: "70px" }} />
                <h1 style={{ fontSize: "300%" }}>Menu de Produtos</h1>
            </div>

            <hr className="line" />
            <h5 className="subtitle mt-5">Nos blocos abaixo, você poderá gerenciar os dados dos seus produtos.</h5>

            <div className="container mt-5">
                <div className="row justify-content-center">

                    {/* Modal Cadastro */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Cadastrar Produto</h5>
                                <p className="card-text text-center subtitleCard">Preencha os dados do novo produto</p>
                                <div className="text-center mb-3">
                                    <img src="cadastro.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Produto" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalCadastro(true)}>
                                        📝Cadastrar Produto
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalCadastro} onHide={() => setMostrarModalCadastro(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Cadastro de Produto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Produto</Form.Label>
                                        <Form.Control name="nome" value={produto.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control name="preco" value={produto.preco} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Estoque</Form.Label>
                                        <Form.Control name="estoque" value={produto.estoque} onChange={handleChange} />
                                    </Form.Group>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <p>Confirme os dados:</p>
                                    <ul>
                                        <li><strong>Id do Produto: 1</strong> {produto.id}</li>
                                        <li><strong>Nome do Produto:</strong> {produto.nome}</li>
                                        <li><strong>Preço:</strong> {produto.preco}</li>
                                        <li><strong>Estoque:</strong> {produto.estoque}</li>
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
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Listar Produtos</h5>
                                <p className="card-text text-center subtitleCard">Visualize todos os produtos cadastrados</p>
                                <div className="text-center mb-3">
                                    <img src="listagem.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Produto" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalListagem(true)}>
                                        📋Listar Produtos
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalListagem} onHide={() => setMostrarModalListagem(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Listagem de Produtos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {produtos.length === 0 ? (
                                <p>Nenhum produto cadastrado.</p>
                            ) : (
                                produtos.map((prod, index) => (
                                    <div key={index}>
                                        <p><strong>Nome do Produto:</strong> {prod.nome}</p>
                                        <p><strong>Preço:</strong> {prod.preco}</p>
                                        <p><strong>Estoque:</strong> {prod.estoque} unidades</p>
                                        <p><strong>Consumo:</strong> {prod.consumo} unidades</p>
                                        {index < produtos.length - 1 && <hr />}
                                    </div>
                                ))
                            )}
                        </Modal.Body>
                    </Modal>

                    {/* Modal Atualizar Produto */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Atualizar Produto</h5>
                                <p className="card-text text-center subtitleCard">Altere os dados de um produto existente</p>
                                <div className="text-center mb-3">
                                    <img src="atualizaçao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Produto" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalAtualizar(true)}>
                                        ✏️Atualizar Produto
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalAtualizar} onHide={() => setMostrarModalAtualizar(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Atualização de Produto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <Form.Group className="mb-3">
                                <Form.Label>ID do Produto</Form.Label>
                                <Form.Control type="text" value={idPesquisa} onChange={handleIdPesquisaChange} />
                            </Form.Group>
                            {produtos.filter(prod => prod.id === parseInt(idPesquisa)).map((prod, index) => (
                                <div key={index}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Produto</Form.Label>
                                        <Form.Control name="nome" value={produto.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Preço</Form.Label>
                                        <Form.Control name="preco" value={produto.preco} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Estoque</Form.Label>
                                        <Form.Control name="estoque" value={produto.estoque} onChange={handleChange} />
                                    </Form.Group>
                                </div>
                            ))}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={atualizarProduto}>Atualizar Produto</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal Exclusão */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Excluir Produto</h5>
                                <p className="card-text text-center subtitleCard">Exclua um produto existente no sistema</p>
                                <div className="text-center mb-3">
                                    <img src="exclusao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Produto" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalExclusao(true)}>
                                        🗑️Excluir Produto
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={mostrarModalExclusao} onHide={() => setMostrarModalExclusao(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Excluir Produto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <Form.Group className="mb-3">
                                <Form.Label>ID do Produto a ser excluído</Form.Label>
                                <Form.Control type="text" value={idExclusao} onChange={(e) => setIdExclusao(e.target.value)} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={excluirProduto}>Excluir Produto</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
