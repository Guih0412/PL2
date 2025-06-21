import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Cliente {
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
  clientes: Cliente[];
  itensPorPagina: number;
}

export default class ProdutoTop10ClientesQuantidade extends Component<Props, State> {
  state: State = {
    step: 1,
    itensPorPagina: 2,
    clientes: [
      { id: 1, nome: "Emily Armstrong", quantidade: 50 },
      { id: 2, nome: "Chester Bennington", quantidade: 48 },
      { id: 3, nome: "Mike Shinoda", quantidade: 45 },
      { id: 4, nome: "Fernando Badauí", quantidade: 40 },
      { id: 5, nome: "Tico Santa Cruz", quantidade: 38 },
      { id: 6, nome: "Marcelo Falcão", quantidade: 36 },
      { id: 7, nome: "Tales de Polli", quantidade: 30 },
      { id: 8, nome: "Carlo Alexandre", quantidade: 28 },
      { id: 9, nome: "Armandinho", quantidade: 25 },
      { id: 10, nome: "Cazuza", quantidade: 20 },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.clientes.length / this.state.itensPorPagina);
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
    const { clientes, step, itensPorPagina } = this.state;

    const start = (step - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const clientesPagina = clientes.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Top 10 Clientes por Quantidade de Produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {clientesPagina.map((cliente) => (
            <div
              key={cliente.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
                color: "rgb(69,32,23)",
              }}
            >
              <p><strong>Nome:</strong> {cliente.nome}</p>
              <p><strong>Quantidade Consumida:</strong> {cliente.quantidade}</p>
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
            disabled={end >= clientes.length}
          >
            Próximo ➡
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
