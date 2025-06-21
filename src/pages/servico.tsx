import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CadastrarServico from "../components/servico/cadastrarServico";
import ListarServico from "../components/servico/listarServico";
import AtualizarServico from "../components/servico/atualizarServico";
import ExcluirServico from "../components/servico/excluirServico";
import BuscarServicoPorCodigo from "../components/servico/buscarServicoPorCodigo";

export default class Servico extends Component {
  state = {
    mostrarModalCadastro: false,
    mostrarModalListagem: false,
    mostrarModalAtualizacao: false,
    mostrarModalExclusao: false,
    mostrarModalBuscaCodigo: false,
  };

  cardStyle = {
    borderColor: "#5c4033",
    backgroundColor: "rgb(255, 161, 106)",
    transition: "transform 0.2s",
    cursor: "pointer",
  };

  handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
  };

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
  };

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
          <img src="/servico.png" style={{ width: "70px" }} />
          <h1 style={{ fontSize: "300%" }}>Menu de Serviços</h1>
        </div>

        <hr className="line" />

        <div className="row justify-content-center">

          {/* Card - Cadastrar Serviço */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Cadastro de Serviço
                </h5>
                <p className="card-text text-center subtitleCard">
                  Informe corretamente os dados do serviço para realizar seu cadastro
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalCadastro: true })}
                  >
                    📝 Cadastrar Serviço
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Cadastrar Serviço */}
          <CadastrarServico
            show={this.state.mostrarModalCadastro}
            onHide={() => this.setState({ mostrarModalCadastro: false })}
          />

          {/* Card - Listar Serviço */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Listagem de Serviços
                </h5>
                <p className="card-text text-center subtitleCard">
                  Confira a lista completa dos serviços cadastrados no sistema
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalListagem: true })}
                  >
                    📋 Listar Serviços
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalBuscaCodigo: true })}
                  >
                    🔍 Buscar Serviço
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Listar Serviços */}
          <ListarServico
            show={this.state.mostrarModalListagem}
            onHide={() => this.setState({ mostrarModalListagem: false })}
          />

          {/* Modal - Buscar Serviço por Código */}
          <BuscarServicoPorCodigo
            show={this.state.mostrarModalBuscaCodigo}
            onHide={() => this.setState({ mostrarModalBuscaCodigo: false })}
          />
        </div>
        <div className="row justify-content-center">

          {/* Card - Atualizar Serviço */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Atualização de Serviço
                </h5>
                <p className="card-text text-center subtitleCard">
                  Edite os dados dos serviços que já estão cadastrados no sistema
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalAtualizacao: true })}
                  >
                    🔄 Atualizar Serviço
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Atualizar Serviço */}
          <AtualizarServico
            show={this.state.mostrarModalAtualizacao}
            onHide={() => this.setState({ mostrarModalAtualizacao: false })}
          />

          {/* Card - Excluir Serviço */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Exclusão de Serviço
                </h5>
                <p className="card-text text-center subtitleCard">
                  Exclua um serviço do sistema de forma simples e rápida.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalExclusao: true })}
                  >
                    ❌ Excluir Serviço
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Excluir Serviço */}
          <ExcluirServico
            show={this.state.mostrarModalExclusao}
            onHide={() => this.setState({ mostrarModalExclusao: false })}
          />
        </div>
      </div>
    );
  }
}
