import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface ClienteValor {
  id: number;
  nome: string;
  valorConsumido: number;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  clientes: ClienteValor[];
  itensPorPagina: number;
}

export default class ProdutoTop5ClientesValor extends Component<Props, State> {
  state: State = {
    step: 1,
    itensPorPagina: 3,
    clientes: [
      { id: 1, nome: "Emily Armstrong", valorConsumido: 1200 },
      { id: 2, nome: "Chester Bennington", valorConsumido: 1100 },
      { id: 3, nome: "Mike Shinoda", valorConsumido: 900 },
      { id: 4, nome: "Joe Hahn", valorConsumido: 850 },
      { id: 5, nome: "Brad Delson", valorConsumido: 700 },
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
          <Modal.Title>Top 5 Clientes por Valor Consumido</Modal.Title>
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
              <p><strong>Valor Consumido:</strong> R$ {cliente.valorConsumido.toFixed(2)}</p>
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
