import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpfCliente: string;
  rgPet: string;
}

export default class ExcluirPet extends Component<Props, State> {
  state: State = {
    step: 1,
    cpfCliente: "",
    rgPet: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  next = () => {
    const { step } = this.state;
    if (step < 3) {
      this.setState({ step: step + 1 });
    }
  };

  back = () => {
    const { step } = this.state;
    if (step === 1) {
      this.props.onHide();
      this.setState({ step: 1, cpfCliente: "", rgPet: "" });
    } else {
      this.setState({ step: step - 1 });
    }
  };

  handleConfirm = () => {
    alert(`Pet excluído com sucesso!`);
    this.props.onHide();
    this.setState({ step: 1, cpfCliente: "", rgPet: "" });
  };

  render() {
    const { show } = this.props;
    const { step, cpfCliente, rgPet } = this.state;

    return (
      <Modal show={show} onHide={this.back} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Excluir Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o CPF do cliente dono do pet</Form.Label>
              <Form.Control
                type="text"
                name="cpfCliente"
                value={cpfCliente}
                onChange={this.handleChange}
              />
            </Form.Group>
          )}

          {step === 2 && (
            <Form.Group className="mb-3">
              <Form.Label>Digite o RG do pet a ser excluído</Form.Label>
              <Form.Control
                type="text"
                name="rgPet"
                value={rgPet}
                onChange={this.handleChange}
              />
            </Form.Group>
          )}

          {step === 3 && (
            <p>
              Tem certeza que deseja excluir o pet com RG <strong>{rgPet}</strong> do cliente com CPF <strong>{cpfCliente}</strong>?
              <br />
              Essa ação não poderá ser desfeita.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step > 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.back}
            >
              ⬅ Voltar
            </Button>
          )}
          {step < 3 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
              disabled={
                (step === 1 && !cpfCliente.trim()) ||
                (step === 2 && !rgPet.trim())
              }
            >
              Próximo ➡
            </Button>
          )}
          {step === 3 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.handleConfirm}
            >
              🗑️ Excluir
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
