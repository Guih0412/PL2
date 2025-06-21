import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

interface Pet {
  id: number;
  nome: string;
  genero: string;
  raca: string;
  tipo: string;
  donoNome: string;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  pets: Pet[];
  petsPorPagina: number;
}

export default class ListarPets extends Component<Props, State> {
  state: State = {
    step: 1,
    petsPorPagina: 2,
    pets: [
      { id: 1, nome: "Emilinha", genero: "Fêmea", raca: "Pinscher", tipo: "Cachorro", donoNome: "Emily Armstrong" },
      { id: 2, nome: "Chazy", genero: "Macho", raca: "Siâmes", tipo: "Gato", donoNome: "Chester Bennington" },
      { id: 3, nome: "Shinodinho", genero: "Macho", raca: "Canário", tipo: "Pássaro", donoNome: "Mike Shinoda" },
      { id: 4, nome: "Badauino", genero: "Fêmea", raca: "Betta", tipo: "Peixe", donoNome: "Fernando Badaui" },
      { id: 5, nome: "Detonautinha", genero: "Macho", raca: "Iguana", tipo: "Réptil", donoNome: "Tico Santa Cruz" },
      { id: 6, nome: "Rappinha", genero: "Fêmea", raca: "Anão", tipo: "Coelho", donoNome: "Marcelo Falcão" },
    ],

  };

  next = () => {
    const totalPages = Math.ceil(this.state.pets.length / this.state.petsPorPagina);
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
    const { pets, step, petsPorPagina } = this.state;

    const start = (step - 1) * petsPorPagina;
    const end = start + petsPorPagina;
    const petsPagina = pets.slice(start, end);

    return (
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Lista de Pets</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {petsPagina.map((pet) => (
            <div
              key={pet.id}
              style={{
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                paddingBottom: "0.5rem",
              }}
            >
              <p><strong>Nome do Pet:</strong> {pet.nome}</p>
              <p><strong>Gênero:</strong> {pet.genero}</p>
              <p><strong>Raça:</strong> {pet.raca}</p>
              <p><strong>Tipo:</strong> {pet.tipo}</p>
              <p><strong>Nome do Dono:</strong> {pet.donoNome}</p>
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
            disabled={end >= pets.length}
          >
            Próximo ➡
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
