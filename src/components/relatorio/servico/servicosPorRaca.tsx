import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface ServicoPorRaca {
  id: number;
  raca: string;
  quantidade: number;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  dados: ServicoPorRaca[];
  itensPorPagina: number;
}

export default class ServicosPorRaca extends Component<Props, State> {
  state: State = {
    step: 1,
    itensPorPagina: 2,
    dados: [
      { id: 1, raca: "Golden Retriever", quantidade: 210 },
      { id: 2, raca: "Sphynx", quantidade: 150 },
      { id: 3, raca: "Shih Tzu", quantidade: 120 },
      { id: 4, raca: "Angorá", quantidade: 90 },
      { id: 5, raca: "Calopsita", quantidade: 70 },
      { id: 6, raca: "Chinchila", quantidade: 50 },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.dados.length / this.state.itensPorPagina);
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
    const { dados, step, itensPorPagina } = this.state;

    const start = (step - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const dadosPagina = dados.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Consumo de Serviços por Raça</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {dadosPagina.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
                color: "rgb(69,32,23)",
              }}
            >
              <p><strong>Raça:</strong> {item.raca}</p>
              <p><strong>Quantidade de serviços:</strong> {item.quantidade}</p>
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
            disabled={end >= dados.length}
          >
            Próximo ➡
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
