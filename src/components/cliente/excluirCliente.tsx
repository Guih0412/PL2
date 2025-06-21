import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  cpf: string;
}

export default class ExcluirCliente extends Component<Props, State> {
  state: State = {
    step: 1,
    cpf: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ cpf: e.target.value });
  };

  next = () => {
    this.setState({ step: 2 });
  };

  back = () => {
    this.props.onHide();
    this.setState({ step: 1, cpf: "" });
  };

  handleConfirm = () => {
    alert("Cliente excluído com sucesso!");
    this.props.onHide();
    this.setState({ step: 1, cpf: "" });
  };

  render() {
    const { show } = this.props;
    const { step, cpf } = this.state;

    return (
      <Modal show={show} onHide={this.back} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Excluir Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {step === 1 && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Digite o CPF do cliente a ser excluido</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={cpf}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          )}

          {step === 2 && (
            <p>
              Tem certeza que deseja excluir o cliente
              {cpf ? <> com CPF <strong>{cpf}</strong></> : "?"}
              <br />
              Essa ação não poderá ser desfeita.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
          {step > 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={() => this.setState({ step: 1 })}
            >
              ⬅ Voltar
            </Button>
          )}
          {step === 1 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.next}
            >
              Próximo ➡
            </Button>
          )}
          {step === 2 && (
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
