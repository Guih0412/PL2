import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpfDono: string;
  rgPet: string;
  pet: {
    nome: string;
    genero: string;
    raca: string;
    tipo: string;
  };
}

export default class AtualizarPet extends Component<Props, State> {
  state: State = {
    step: 1,
    cpfDono: "",
    rgPet: "",
    pet: {
      nome: "",
      genero: "",
      raca: "",
      tipo: "",
    },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cpfDono" || name === "rgPet") {
      this.setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      this.setState(prevState => ({
        pet: {
          ...prevState.pet,
          [name]: value,
        },
      }));
    }
  };

  next = () => {
    this.setState((prevState) => ({
      step: prevState.step < 4 ? prevState.step + 1 : prevState.step,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      step: prevState.step > 1 ? prevState.step - 1 : prevState.step,
    }));
  };

  handleAtualizar = () => {
    alert("Pet atualizado com sucesso!");
    this.setState({
      step: 1,
      cpfDono: "",
      rgPet: "",
      pet: {
        nome: "",
        genero: "",
        raca: "",
        tipo: "",
      },
    });
    this.props.onHide();
  };

  handleCancelar = () => {
    this.setState({
      step: 1,
      cpfDono: "",
      rgPet: "",
      pet: {
        nome: "",
        genero: "",
        raca: "",
        tipo: "",
      },
    });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, cpfDono, rgPet, pet } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancelar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Atualizar Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            {step === 1 && (
              <Form.Group className="mb-3">
                <Form.Label>Digite o CPF do dono do pet</Form.Label>
                <Form.Control
                  type="text"
                  name="cpfDono"
                  value={cpfDono}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {step === 2 && (
              <Form.Group className="mb-3">
                <Form.Label>Digite o RG do pet</Form.Label>
                <Form.Control
                  type="text"
                  name="rgPet"
                  value={rgPet}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {(step === 3 || step === 4) && (
              <>
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
          {step < 4 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
            >
              Próximo ➡
            </Button>
          )}
          {step === 4 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.handleAtualizar}
            >
              🔄 Atualizar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
