import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Produto {
  id: number;
  nome: string;
  preco: string;
  estoque: string;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  produtos: Produto[];
  produtosPorPagina: number;
}

export default class ListarProdutos extends Component<Props, State> {
  state: State = {
    step: 1,
    produtosPorPagina: 2,
    produtos: [
      { id: 1, nome: "Ração Golden", preco: "89.90", estoque: "12" },
      { id: 2, nome: "Shampoo Pet Clean", preco: "22.50", estoque: "30" },
      { id: 3, nome: "Coleira Anti-pulgas", preco: "45.00", estoque: "8" },
      { id: 4, nome: "Arranhador Luxo", preco: "120.00", estoque: "5" },
      { id: 5, nome: "Aquário Mini", preco: "199.99", estoque: "3" },
      { id: 6, nome: "Comedouro Inox", preco: "18.75", estoque: "20" },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.produtos.length / this.state.produtosPorPagina);
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
    const { produtos, step, produtosPorPagina } = this.state;

    const start = (step - 1) * produtosPorPagina;
    const end = start + produtosPorPagina;
    const produtosPagina = produtos.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Lista de Produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {produtosPagina.map((produto) => (
            <div
              key={produto.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
              }}
            >
              <p><strong>Nome:</strong> {produto.nome}</p>
              <p><strong>Preço:</strong> R$ {produto.preco}</p>
              <p><strong>Estoque:</strong> {produto.estoque} unidades</p>
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
