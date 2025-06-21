import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  telefone: string;
  email: string;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  clientes: Cliente[];
  clientesPorPagina: number;
}

export default class ListarClientes extends Component<Props, State> {
  state: State = {
    step: 1,
    clientesPorPagina: 2, 
    clientes: [
      { id: 1, nome: "Emily Armstrong", nomeSocial: "Emily", telefone: "(11) 91234-5678", email: "emily@dead-sara.com" },
      { id: 2, nome: "Chester Bennington", nomeSocial: "Chester", telefone: "(21) 92345-6789", email: "chester@lp.com" },
      { id: 3, nome: "Mike Shinoda", nomeSocial: "Mike", telefone: "(31) 93456-7890", email: "mike@fortminor.com" },
      { id: 4, nome: "Fernando Badaui", nomeSocial: "Badaui", telefone: "(41) 94567-8901", email: "badaui@cp22.com.br" },
      { id: 5, nome: "Tico Santa Cruz", nomeSocial: "Tico", telefone: "(51) 95678-9012", email: "tico@detonautas.com.br" },
      { id: 6, nome: "Marcelo Falcão", nomeSocial: "Falcão", telefone: "(61) 96789-0123", email: "falcao@orappa.com" },
    ],
  };

  next = () => {
    const totalPages = Math.ceil(this.state.clientes.length / this.state.clientesPorPagina);
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
    const { clientes, step, clientesPorPagina } = this.state;

    const start = (step - 1) * clientesPorPagina;
    const end = start + clientesPorPagina;
    const clientesPagina = clientes.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Lista de Clientes</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {clientesPagina.map((cliente) => (
            <div
              key={cliente.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
              }}
            >
              <p><strong>Nome:</strong> {cliente.nome}</p>
              <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              <p><strong>Email:</strong> {cliente.email}</p>
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
