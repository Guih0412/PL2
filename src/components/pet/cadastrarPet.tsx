import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpfDono: string;
  pet: {
    nome: string;
    genero: string;
    raca: string;
    tipo: string;
    rg: string;
  };
}

export default class CadastrarPet extends Component<Props, State> {
  state: State = {
    step: 1,
    cpfDono: "",
    pet: {
      nome: "",
      genero: "",
      raca: "",
      tipo: "",
      rg: "",
    },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cpfDono") {
      this.setState({ cpfDono: value });
    } else {
      this.setState((prevState) => ({
        pet: {
          ...prevState.pet,
          [name]: value,
        },
      }));
    }
  };

  next = () => {
    this.setState((prevState) => ({
      step: prevState.step < 2 ? prevState.step + 1 : prevState.step,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      step: prevState.step > 1 ? prevState.step - 1 : prevState.step,
    }));
  };

  handleSalvar = () => {
    const { cpfDono, pet } = this.state;

    alert(`Pet cadastrado com sucesso!`);

    this.setState({
      step: 1,
      cpfDono: "",
      pet: {
        nome: "",
        genero: "",
        raca: "",
        tipo: "",
        rg: "", 
      },
    });
    this.props.onHide();
  };

  handleVoltar = () => {
    this.setState({
      step: 1,
      cpfDono: "",
      pet: {
        nome: "",
        genero: "",
        raca: "",
        tipo: "",
        rg: "",
      },
    });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, cpfDono, pet } = this.state;

    return (
      <Modal show={show} onHide={this.handleVoltar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Cadastro de Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            {step === 1 && (
              <Form.Group className="mb-3">
                <Form.Label>CPF do Dono</Form.Label>
                <Form.Control
                  type="text"
                  name="cpfDono"
                  value={cpfDono}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {step === 2 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>RG do Pet</Form.Label>
                  <Form.Control
                    type="text"
                    name="rg"
                    value={pet.rg}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={pet.nome}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gênero</Form.Label>
                  <Form.Control
                    type="text"
                    name="genero"
                    value={pet.genero}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Raça</Form.Label>
                  <Form.Control
                    type="text"
                    name="raca"
                    value={pet.raca}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    type="text"
                    name="tipo"
                    value={pet.tipo}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step > 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.back}
            >
              ⬅ Voltar
            </Button>
          )}
          {step < 2 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
              disabled={!cpfDono.trim()}
            >
              Próximo ➡
            </Button>
          )}
          {step === 2 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.handleSalvar}
            >
              📝 Cadastrar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
