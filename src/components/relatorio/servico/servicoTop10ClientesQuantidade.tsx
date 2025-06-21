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

export default class ServicoTop10ClientesQuantidade extends Component<Props, State> {
    state: State = {
        step: 1,
        itensPorPagina: 2,
        clientes: [
            { id: 1, nome: "Emily Armstrong", quantidade: 15 },       
            { id: 2, nome: "Chester Bennington", quantidade: 14 },     
            { id: 3, nome: "Mike Shinoda", quantidade: 13 },           
            { id: 4, nome: "Cazuza", quantidade: 12 },                
            { id: 5, nome: "Renato Russo", quantidade: 11 },           
            { id: 6, nome: "Roberto Frejat", quantidade: 10 },         
            { id: 7, nome: "Dinho Ouro Preto", quantidade: 9 },        
            { id: 8, nome: "Pitty", quantidade: 8 },                   
            { id: 9, nome: "Rita Lee", quantidade: 7 },                 
            { id: 10, nome: "Chorão", quantidade: 6 },                  
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
                    <Modal.Title>Top 10 Clientes por Quantidade de Serviços</Modal.Title>
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
