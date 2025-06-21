import React, { Component, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  codigoBusca: string;
  servicoEncontrado: {
    nome: string;
    preco: string;
  } | null;
}

export default class BuscarServicoPorCodigo extends Component<Props, State> {
  state: State = {
    step: 1,
    codigoBusca: "",
    servicoEncontrado: null,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ codigoBusca: e.target.value });
  };

  buscarServico = () => {
    // Simulação de busca
    const servico = {
      nome: "Banho e Tosa",
      preco: "59.90",
    };
    this.setState({ servicoEncontrado: servico, step: 2 });
  };

  voltar = () => {
    this.setState({ step: 1, codigoBusca: "", servicoEncontrado: null });
  };

  fechar = () => {
    this.setState({ step: 1, codigoBusca: "", servicoEncontrado: null });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, codigoBusca, servicoEncontrado } = this.state;

    return (
      <Modal show={show} onHide={this.fechar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Buscar Serviço por Código</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o código do serviço</Form.Label>
              <Form.Control
                type="text"
                value={codigoBusca}
                onChange={this.handleChange}
                placeholder="Código"
              />
            </Form.Group>
          )}

          {step === 2 && servicoEncontrado && (
            <>
              <p><strong>Nome:</strong> {servicoEncontrado.nome}</p>
              <p><strong>Preço:</strong> R$ {servicoEncontrado.preco}</p>
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
              onClick={this.buscarServico}
              disabled={!codigoBusca}
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
