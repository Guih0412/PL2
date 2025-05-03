import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Pet {
    id: string;
    nome: string;
    genero: string;
    raca: string;
    tipo: string;
    donoCpf: string;
}

export default function Pets() {
    const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
    const [mostrarModalAtualizar, setMostrarModalAtualizar] = useState(false);
    const [mostrarModalExclusao, setMostrarModalExclusao] = useState(false);
    const [mostrarModalListagem, setMostrarModalListagem] = useState(false);
    const [step, setStep] = useState(1);
    const [idPet, setIdPet] = useState("");
    const [pet, setPet] = useState({
        id: "",
        nome: "",
        genero: "",
        raca: "",
        tipo: "",
        donoCpf: "",
    });
    const [cpfPesquisa, setCpfPesquisa] = useState("");
    const [pets, setPets] = useState([
        { id: "1", nome: "Rex", genero: "Macho", raca: "Labrador", tipo: "Cachorro", donoCpf: "12345678901" },
        { id: "2", nome: "Mia", genero: "Fêmea", raca: "Persa", tipo: "Gato", donoCpf: "98765432100" },
        { id: "3", nome: "Bolt", genero: "Macho", raca: "Bulldog", tipo: "Cachorro", donoCpf: "12345678901" },
    ]);
    

    // Função para navegar para a próxima etapa do modal
    const next = () => setStep(prev => prev + 1);
    const back = () => setStep(prev => prev - 1);

    // Funções para controle de alterações nos campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPet({ ...pet, [e.target.name]: e.target.value });
    };

    const handleCpfPesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpfPesquisa(e.target.value);
    };

    const handleIdPetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdPet(e.target.value);
    };

    // Função para salvar um novo pet
    const salvar = () => {
        console.log("Pet Cadastrado:", pet);
        setMostrarModalCadastro(false);
        setPet({ id: "", nome: "", genero: "", raca: "", tipo: "", donoCpf: "" });
    };

    // Função para atualizar um pet existente
    const atualizarPet = () => {
        console.log("Pet Atualizado:", pet);
        setMostrarModalAtualizar(false);
    };

    // Função para excluir um pet
    const excluirPet = () => {
        setPets(pets.filter(pet => pet.id !== idPet)); // Exclui o pet pelo ID
        setMostrarModalExclusao(false);
    };

    

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
                <img src="/pet.png" style={{ width: "70px" }} />
                <h1 style={{ fontSize: "300%" }}>Menu de Pets</h1>
            </div>
            <hr className="line" />
            <h5 className="subtitle mt-5">Nos blocos abaixo, você poderá gerenciar os dados dos seus pets.</h5>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* Modal Cadastro de Pet */}
                    <Modal show={mostrarModalCadastro} onHide={() => setMostrarModalCadastro(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Cadastrar Pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o CPF do dono</Form.Label>
                                    <Form.Control value={cpfPesquisa} onChange={handleCpfPesquisaChange} />
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Pet</Form.Label>
                                        <Form.Control name="nome" value={pet.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gênero</Form.Label>
                                        <Form.Control name="genero" value={pet.genero} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Raça</Form.Label>
                                        <Form.Control name="raca" value={pet.raca} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tipo</Form.Label>
                                        <Form.Control name="tipo" value={pet.tipo} onChange={handleChange} />
                                    </Form.Group>
                                </>
                            )}
                            {step === 3 && (
                                <ul>
                                    <li><strong>Id:1</strong>{pet.id}</li>
                                    <li><strong>Nome:</strong> {pet.nome}</li>
                                    <li><strong>Gênero:</strong> {pet.genero}</li>
                                    <li><strong>Raça:</strong> {pet.raca}</li>
                                    <li><strong>Tipo:</strong> {pet.tipo}</li>
                                </ul>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            {step > 1 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={back}>⬅Voltar</Button>}
                            {step < 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={next}>Próximo➡️</Button>}
                            {step === 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={salvar}>Salvar Pet</Button>}
                        </Modal.Footer>
                    </Modal>

                    {/* Card Cadastrar Pet */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Cadastrar Pet</h5>
                                <p className="card-text text-center subtitleCard">Preencha os dados do novo pet</p>
                                <div className="text-center mb-3">
                                    <img src="cadastro.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Pet" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalCadastro(true)}>
                                        📝Cadastrar Pet
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Listar Pets */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Listar Pets</h5>
                                <p className="card-text text-center subtitleCard">Veja todos os pets cadastrados</p>
                                <div className="text-center mb-3">
                                    <img src="listagem.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Listar Pets" />
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button
                                        variant="warning"
                                        className="mt-3 btn text-white"
                                        style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                                        onClick={() => setMostrarModalListagem(true)}
                                    >
                                        🔍 Listar Pets
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/* Modal Listagem Pets */}
                    <Modal show={mostrarModalListagem} onHide={() => setMostrarModalListagem(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Todos os Pets</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <ul>
                                {pets.map((pet: Pet, index) => (
                                    <div key={pet.id}>
                                        <p><strong>Nome: {pet.nome}</strong></p>
                                        <p><strong>Tipo: {pet.tipo}</strong></p>
                                        <p><strong>Gênero: {pet.genero}</strong></p>
                                        <p><strong>Raça: {pet.raca}</strong></p>
                                        {index < pets.length - 1 && <hr />}
                                    </div>
                                ))}
                            </ul>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }} />
                    </Modal>

                    {/* Modal Atualizar Pet */}
                    <Modal show={mostrarModalAtualizar} onHide={() => setMostrarModalAtualizar(false)} centered size="lg">
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Atualizar Pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o CPF do dono</Form.Label>
                                    <Form.Control value={cpfPesquisa} onChange={handleCpfPesquisaChange} />
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o ID do pet a ser excluído</Form.Label>
                                    <Form.Control value={idPet} onChange={handleIdPetChange} />
                                </Form.Group>
                            )}
                            {step === 3 && (
                                <>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nome do Pet</Form.Label>
                                        <Form.Control name="nome" value={pet.nome} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Gênero</Form.Label>
                                        <Form.Control name="genero" value={pet.genero} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Raça</Form.Label>
                                        <Form.Control name="raca" value={pet.raca} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tipo</Form.Label>
                                        <Form.Control name="tipo" value={pet.tipo} onChange={handleChange} />
                                    </Form.Group>
                                </>
                            )}
                            {step === 4 && (
                                <ul>
                                    <li><strong>Nome:</strong> {pet.nome}</li>
                                    <li><strong>Gênero:</strong> {pet.genero}</li>
                                    <li><strong>Raça:</strong> {pet.raca}</li>
                                    <li><strong>Tipo:</strong> {pet.tipo}</li>
                                </ul>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            {step > 1 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={back}>⬅Voltar</Button>}
                            {step < 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={next}>Próximo➡️</Button>}
                            {step === 3 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={atualizarPet}>🛠️Atualizar Pet</Button>}
                        </Modal.Footer>
                    </Modal>

                    {/* Card Atualizar Pet */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Atualizar Pet</h5>
                                <p className="card-text text-center subtitleCard">Altere os dados de um pet</p>
                                <div className="text-center mb-3">
                                    <img src="atualizaçao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Atualizar Pet" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="warning" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalAtualizar(true)}>
                                        🛠️Atualizar Pet
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Excluir Pet */}
                    <Modal show={mostrarModalExclusao} onHide={() => setMostrarModalExclusao(false)} centered>
                        <Modal.Header closeButton className="modalHeader">
                            <Modal.Title>Excluir Pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            {step === 1 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o CPF do dono</Form.Label>
                                    <Form.Control value={cpfPesquisa} onChange={handleCpfPesquisaChange} />
                                </Form.Group>
                            )}
                            {step === 2 && (
                                <Form.Group className="mb-3">
                                    <Form.Label>Digite o ID do pet a ser excluído</Form.Label>
                                    <Form.Control value={idPet} onChange={handleIdPetChange} />
                                </Form.Group>
                            )}
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
                            {step > 1 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={back}>⬅️ Voltar</Button>}
                            {step < 2 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={next}>Próximo ➡️</Button>}
                            {step === 2 && <Button style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => { excluirPet(); setMostrarModalExclusao(false); }}>🗑️ Confirmar Exclusão</Button>}
                        </Modal.Footer>
                    </Modal>

                    {/* Card Excluir Pet */}
                    <div className="col-md-3 col-sm-12 mb-4">
                        <div className="card shadow" style={{ borderColor: "#5c4033", backgroundColor: "rgb(255, 161, 106)" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>Excluir Pet</h5>
                                <p className="card-text text-center subtitleCard">Exclua um pet do cadastro</p>
                                <div className="text-center mb-3">
                                    <img src="exclusao.png" style={{ width: "70%" }} className="d-block mx-auto" alt="Excluir Pet" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button variant="danger" className="mt-3 btn text-white" style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }} onClick={() => setMostrarModalExclusao(true)}>
                                        🗑️Excluir Pet
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
