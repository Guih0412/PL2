import React, { Component, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpfBusca: string;
  clienteEncontrado: {
    nome: string;
    nomeSocial: string;
    telefone: string;
    email: string;
  } | null;
}

export default class BuscarClientePorCPF extends Component<Props, State> {
  state: State = {
    step: 1,
    cpfBusca: "",
    clienteEncontrado: null,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ cpfBusca: e.target.value });
  };

  buscarCliente = () => {
    const cliente = {
      nome: "Emily Armstrong",
      nomeSocial: "Emily",
      telefone: "(11) 91234-5678",
      email: "emily@dead-sara.com",
    };
    this.setState({ clienteEncontrado: cliente, step: 2 });
  };

  voltar = () => {
    this.setState({ step: 1, cpfBusca: "", clienteEncontrado: null });
  };

  fechar = () => {
    this.setState({ step: 1, cpfBusca: "", clienteEncontrado: null });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, cpfBusca, clienteEncontrado } = this.state;

    return (
      <Modal show={show} onHide={this.fechar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Buscar Cliente por CPF</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o CPF do cliente</Form.Label>
              <Form.Control
                type="text"
                value={cpfBusca}
                onChange={this.handleChange}
                placeholder="CPF"
              />
            </Form.Group>
          )}

          {step === 2 && clienteEncontrado && (
            <>
              <p>
                <strong>Nome:</strong> {clienteEncontrado.nome}
              </p>
              <p>
                <strong>Nome Social:</strong> {clienteEncontrado.nomeSocial}
              </p>
              <p>
                <strong>Telefone:</strong> {clienteEncontrado.telefone}
              </p>
              <p>
                <strong>Email:</strong> {clienteEncontrado.email}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step === 1 && (
            <Button
              variant="primary"
              style={{
                backgroundColor: "rgb(69,32,23)",
                borderColor: "rgb(69,32,23)",
                marginRight: "auto",
              }}
              onClick={this.buscarCliente}
              disabled={!cpfBusca}
            >
              Buscar
            </Button>
          )}

          {step === 2 && (
            <Button
              style={{
                backgroundColor: "rgb(69,32,23)",
                borderColor: "rgb(69,32,23)",
                marginRight: "auto",
              }}
              onClick={this.voltar}
            >
              ⬅ Voltar
            </Button>
          )}

          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={this.fechar}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
