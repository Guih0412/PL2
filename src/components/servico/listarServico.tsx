import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Servico {
  id: number;
  nome: string;
  preco: string;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  servicos: Servico[];
  servicosPorPagina: number;
}

export default class ListarServicos extends Component<Props, State> {
  state: State = {
    step: 1,
    servicosPorPagina: 2,
    servicos: [
      { id: 1, nome: "Banho", preco: "45.00" },
      { id: 2, nome: "Tosa", preco: "60.00" },
      { id: 3, nome: "Consulta Veterinária", preco: "150.00" },
      { id: 4, nome: "Vacinação", preco: "85.00" },
      { id: 5, nome: "Higiene Bucal", preco: "40.00" },
      { id: 6, nome: "Hotel Pet Diário", preco: "100.00" },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.servicos.length / this.state.servicosPorPagina);
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
    const { servicos, step, servicosPorPagina } = this.state;

    const start = (step - 1) * servicosPorPagina;
    const end = start + servicosPorPagina;
    const servicosPagina = servicos.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Lista de Serviços</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {servicosPagina.map((servico) => (
            <div
              key={servico.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
              }}
            >
              <p><strong>Nome:</strong> {servico.nome}</p>
              <p><strong>Preço:</strong> R$ {servico.preco}</p>
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
            disabled={end >= servicos.length}
          >
            Próximo ➡
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
