import React, { Component, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpfBusca: string;
  rgBusca: string;
  petEncontrado: {
    nome: string;
    genero: string;
    raca: string;
    tipo: string;
    donoNome: string;
  } | null;
}

export default class BuscarPetPorCPF extends Component<Props, State> {
  state: State = {
    step: 1,
    cpfBusca: "",
    rgBusca: "",
    petEncontrado: null,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  irParaRG = () => {
    this.setState({ step: 2 });
  };

  buscarPet = () => {
    this.setState({
      petEncontrado: {
        nome: "Emilinha",
        genero: "Femêa",
        raca: "Pinscher",
        tipo: "Cachorro",
        donoNome: "Emily Armstrong",
      },
      step: 3,
    });
  };

  voltar = () => {
    const { step } = this.state;
    if (step === 2) {
      this.setState({ step: 1, rgBusca: "" });
    } else if (step === 3) {
      this.setState({ step: 2, petEncontrado: null });
    }
  };

  fechar = () => {
    this.setState({
      step: 1,
      cpfBusca: "",
      rgBusca: "",
      petEncontrado: null,
    });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, cpfBusca, rgBusca, petEncontrado } = this.state;

    return (
      <Modal show={show} onHide={this.fechar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Buscar Pet por CPF</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o CPF do dono</Form.Label>
              <Form.Control
                type="text"
                name="cpfBusca"
                value={cpfBusca}
                onChange={this.handleChange}
                placeholder="CPF"
              />
            </Form.Group>
          )}

          {step === 2 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o RG do Pet</Form.Label>
              <Form.Control
                type="text"
                name="rgBusca"
                value={rgBusca}
                onChange={this.handleChange}
                placeholder="RG do pet"
              />
            </Form.Group>
          )}

          {step === 3 && petEncontrado && (
            <>
              <p>
                <strong>Nome do Pet:</strong> {petEncontrado.nome}
              </p>
              <p>
                <strong>Gênero:</strong> {petEncontrado.genero}
              </p>
              <p>
                <strong>Raça:</strong> {petEncontrado.raca}
              </p>
              <p>
                <strong>Tipo:</strong> {petEncontrado.tipo}
              </p>
              <p>
                <strong>Nome do Dono:</strong> {petEncontrado.donoNome}
              </p>
            </>
          )}
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step === 1 && (
            <Button
              onClick={this.irParaRG}
              disabled={!cpfBusca.trim()}
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            >
              Próximo
            </Button>
          )}

          {step === 2 && (
            <>
              <Button
                onClick={this.voltar}
                style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)", marginRight: "auto" }}
              >
                ⬅ Voltar
              </Button>
              <Button
                onClick={this.buscarPet}
                disabled={!rgBusca.trim()}
                style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              >
                Buscar Pet
              </Button>
            </>
          )}

          {step === 3 && (
            <Button
              onClick={this.voltar}
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            >
              ⬅ Voltar
            </Button>
          )}

          <Button
            onClick={this.fechar}
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
