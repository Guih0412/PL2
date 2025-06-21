import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  produtos: Produto[];
  itensPorPagina: number;
}

export default class ProdutosMaisConsumidos extends Component<Props, State> {
  state: State = {
    step: 1,
    itensPorPagina: 3,
    produtos: [
      { id: 1, nome: "Ração Golden", quantidade: 500 },
      { id: 2, nome: "Shampoo Pet Clean", quantidade: 450 },
      { id: 3, nome: "Coleira Anti-pulgas", quantidade: 400 },
      { id: 4, nome: "Arranhador Luxo", quantidade: 350 },
      { id: 5, nome: "Aquário Mini", quantidade: 300 },
      { id: 6, nome: "Comedouro Inox", quantidade: 250 },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.produtos.length / this.state.itensPorPagina);
    this.setState((prevState) => ({
      step: prevState.step < totalPages ? prevState.step + 1 : prevState.step,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      step: prevState.step > 1 ? prevState.step - 1 : prevState.step,
    }));
  };

  render() {
    const { show, onHide } = this.props;
    const { produtos, step, itensPorPagina } = this.state;

    const start = (step - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const produtosPagina = produtos.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Produtos Mais Consumidos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {produtosPagina.map((produto) => (
            <div
              key={produto.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
                color: "rgb(69,32,23)",
              }}
            >
              <p><strong>Produto:</strong> {produto.nome}</p>
              <p><strong>Quantidade Consumida:</strong> {produto.quantidade}</p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={this.back}
            disabled={step === 1}
          >
            ⬅ Voltar
          </Button>
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={this.next}
            disabled={end >= produtos.length}
          >
            Próximo ➡
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
