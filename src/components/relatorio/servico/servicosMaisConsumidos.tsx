import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Servico {
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
  servicos: Servico[];
  itensPorPagina: number;
}

export default class ServicosMaisConsumidos extends Component<Props, State> {
  state: State = {
    step: 1,
    itensPorPagina: 3,
    servicos: [
      { id: 1, nome: "Banho e Tosa", quantidade: 550 },
      { id: 2, nome: "Consulta Veterinária", quantidade: 520 },
      { id: 3, nome: "Vacinação", quantidade: 480 },
      { id: 4, nome: "Adestramento", quantidade: 400 },
      { id: 5, nome: "Hospedagem", quantidade: 350 },
      { id: 6, nome: "Passeio", quantidade: 320 },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.servicos.length / this.state.itensPorPagina);
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
    const { servicos, step, itensPorPagina } = this.state;

    const start = (step - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const servicosPagina = servicos.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Serviços Mais Consumidos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {servicosPagina.map((servico) => (
            <div
              key={servico.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
                color: "rgb(69,32,23)",
              }}
            >
              <p><strong>Serviço:</strong> {servico.nome}</p>
              <p><strong>Quantidade Consumida:</strong> {servico.quantidade}</p>
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
