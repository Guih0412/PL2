import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cliente: {
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

export default class CadastrarCliente extends Component<Props, State> {
  state: State = {
    step: 1,
    cliente: {
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
      step: prevState.step < 3 ? prevState.step + 1 : prevState.step,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      step: prevState.step > 1 ? prevState.step - 1 : prevState.step,
    }));
  };

  handleSalvar = () => {
    alert("Cliente cadastrado com sucesso!");
    this.setState({
      step: 1,
      cliente: {
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

  handleVoltar = () => {
    this.setState({
      step: 1,
      cliente: {
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
      <Modal show={show} onHide={this.handleVoltar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Cadastro de Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            {step === 1 && (
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

            {step === 2 && (
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

            {step === 3 && (
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
          {step < 3 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
            >
              Próximo ➡
            </Button>
          )}
          {step === 3 && (
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
