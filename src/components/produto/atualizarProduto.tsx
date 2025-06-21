import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface State {
  step: number;
  produto: {
    codigoBusca: string;
    codigo: string;
    nome: string;
    preco: string;
    estoque: string;
  };
}

export default class AtualizarProduto extends Component<Props, State> {
  state: State = {
    step: 1,
    produto: {
      codigoBusca: "",
      codigo: "",
      nome: "",
      preco: "",
      estoque: "",
    },
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      produto: {
        ...prevState.produto,
        [name]: value,
      },
    }));
  };

  next = () => {
    this.setState((prevState) => ({
      step: prevState.step < 3 ? prevState.step + 1 : prevState.step,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      step: prevState.step > 1 ? prevState.step - 1 : prevState.step,
    }));
  };

  handleAtualizar = () => {
    alert("Produto atualizado com sucesso!");
    this.setState({
      step: 1,
      produto: {
        codigoBusca: "",
        codigo: "",
        nome: "",
        preco: "",
        estoque: "",
      },
    });
    this.props.onHide();
  };

  handleCancelar = () => {
    this.setState({
      step: 1,
      produto: {
        codigoBusca: "",
        codigo: "",
        nome: "",
        preco: "",
        estoque: "",
      },
    });
    this.props.onHide();
  };

  render() {
    const { show } = this.props;
    const { step, produto } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancelar} centered size="lg">
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Atualizar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            {step === 1 && (
              <Form.Group className="mb-3">
                <Form.Label>Digite o código do produto a ser atualizado</Form.Label>
                <Form.Control
                  type="text"
                  name="codigoBusca"
                  value={produto.codigoBusca}
                  onChange={this.handleChange}
                />
              </Form.Group>
            )}

            {step === 2 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigo"
                    value={produto.codigo}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={produto.nome}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </>
            )}

            {step === 3 && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control
                    type="text"
                    name="preco"
                    value={produto.preco}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Estoque</Form.Label>
                  <Form.Control
                    type="text"
                    name="estoque"
                    value={produto.estoque}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </>
            )}
          </Form>
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
            >
              Próximo ➡
            </Button>
          )}
          {step === 3 && (
            <Button
              style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
              onClick={this.handleAtualizar}
            >
              🔄 Atualizar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
