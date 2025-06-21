import React, { Component, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  codigoBusca: string;
  produtoEncontrado: {
    nome: string;
    preco: string;
    estoque: string;
  } | null;
}

export default class BuscarProdutoPorCodigo extends Component<Props, State> {
  state: State = {
    step: 1,
    codigoBusca: "",
    produtoEncontrado: null,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ codigoBusca: e.target.value });
  };

  buscarProduto = () => {
    // Simulação de busca
    const produto = {
      nome: "Ração Golden",
      preco: "89.90",
      estoque: "12",
    };
    this.setState({ produtoEncontrado: produto, step: 2 });
  };

  voltar = () => {
    this.setState({ step: 1, codigoBusca: "", produtoEncontrado: null });
  };

  fechar = () => {
    this.setState({ step: 1, codigoBusca: "", produtoEncontrado: null });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, codigoBusca, produtoEncontrado } = this.state;

    return (
      <Modal show={show} onHide={this.fechar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Buscar Produto por Código</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o código do produto</Form.Label>
              <Form.Control
                type="text"
                value={codigoBusca}
                onChange={this.handleChange}
                placeholder="Código"
              />
            </Form.Group>
          )}

          {step === 2 && produtoEncontrado && (
            <>
              <p><strong>Nome:</strong> {produtoEncontrado.nome}</p>
              <p><strong>Preço:</strong> R$ {produtoEncontrado.preco}</p>
              <p><strong>Estoque:</strong> {produtoEncontrado.estoque} unidades</p>
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
              onClick={this.buscarProduto}
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
