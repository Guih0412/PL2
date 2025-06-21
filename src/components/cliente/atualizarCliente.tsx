import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cliente: {
    cpfBusca: string;
    nome: string;
    nomeSocial: string;
    ddd: string;
    telefone: string;
    rg: string;
    rgEmissao: string;
    cpf: string;
    cpfEmissao: string;
    email: string;
  };
}

export default class AtualizarCliente extends Component<Props, State> {
  state: State = {
    step: 1,
    cliente: {
      cpfBusca: "",
      nome: "",
      nomeSocial: "",
      ddd: "",
      telefone: "",
      rg: "",
      rgEmissao: "",
      cpf: "",
      cpfEmissao: "",
      email: "",
    },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        [name]: value,
      },
    }));
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
    alert("Cliente atualizado com sucesso!");
    this.setState({
      step: 1,
      cliente: {
        cpfBusca: "",
        nome: "",
        nomeSocial: "",
        ddd: "",
        telefone: "",
        rg: "",
        rgEmissao: "",
        cpf: "",
        cpfEmissao: "",
        email: "",
      },
    });
    this.props.onHide();
  };

  handleCancelar = () => {
    this.setState({
      step: 1,
      cliente: {
        cpfBusca: "",
        nome: "",
        nomeSocial: "",
        ddd: "",
        telefone: "",
        rg: "",
        rgEmissao: "",
        cpf: "",
        cpfEmissao: "",
        email: "",
      },
    });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, cliente } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancelar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Atualizar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            {step === 1 && (
              <Form.Group className="mb-3">
                <Form.Label>Digite o CPF do cliente a ser atualizado</Form.Label>
                <Form.Control
                  type="text"
                  name="cpfBusca"
                  value={cliente.cpfBusca}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {step === 2 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={cliente.nome}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nome Social</Form.Label>
                  <Form.Control
                    type="text"
                    name="nomeSocial"
                    value={cliente.nomeSocial}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </>
            )}

            {step === 3 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>DDD</Form.Label>
                  <Form.Control
                    type="text"
                    name="ddd"
                    value={cliente.ddd}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefone"
                    value={cliente.telefone}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </>
            )}

            {step === 4 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>RG</Form.Label>
                  <Form.Control
                    type="text"
                    name="rg"
                    value={cliente.rg}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Data Emissão RG</Form.Label>
                  <Form.Control
                    type="date"
                    name="rgEmissao"
                    value={cliente.rgEmissao}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    type="text"
                    name="cpf"
                    value={cliente.cpf}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Data Emissão CPF</Form.Label>
                  <Form.Control
                    type="date"
                    name="cpfEmissao"
                    value={cliente.cpfEmissao}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={cliente.email}
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
