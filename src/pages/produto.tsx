import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CadastrarProduto from "../components/produto/cadastrarProduto";
import ListarProduto from "../components/produto/listarProduto";
import AtualizarProduto from "../components/produto/atualizarProduto";
import ExcluirProduto from "../components/produto/excluirProduto";
import BuscarProdutoPorCodigo from "../components/produto/buscarProdutoPorCodigo";

export default class Produto extends Component {
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
          <img src="/produto.png" style={{ width: "70px" }} />
          <h1 style={{ fontSize: "300%" }}>Menu de Produtos</h1>
        </div>

        <hr className="line" />

        <div className="row justify-content-center">

          {/* Card - Cadastrar Produto */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Cadastro de Produto
                </h5>
                <p className="card-text text-center subtitleCard">
                  Informe corretamente os dados do produto para realizar seu cadastro
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalCadastro: true })}
                  >
                    📝 Cadastrar Produto
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Cadastrar Produto */}
          <CadastrarProduto
            show={this.state.mostrarModalCadastro}
            onHide={() => this.setState({ mostrarModalCadastro: false })}
          />

          {/* Card - Listar Produto */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Listagem de Produtos
                </h5>
                <p className="card-text text-center subtitleCard">
                  Confira a lista completa dos produtos cadastrados no sistema
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalListagem: true })}
                  >
                    📋 Listar Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalBuscaCodigo: true })}
                  >
                    🔍 Buscar Produto
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Listar Produtos */}
          <ListarProduto
            show={this.state.mostrarModalListagem}
            onHide={() => this.setState({ mostrarModalListagem: false })}
          />

          {/* Modal - Buscar Produto por Código */}
          <BuscarProdutoPorCodigo
            show={this.state.mostrarModalBuscaCodigo}
            onHide={() => this.setState({ mostrarModalBuscaCodigo: false })}
          />
        </div>

        <div className="row justify-content-center">

          {/* Card - Atualizar Produto */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Atualização de Produto
                </h5>
                <p className="card-text text-center subtitleCard">
                  Edite os dados dos produtos que já estão cadastrados no sistema
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalAtualizacao: true })}
                  >
                    🔄 Atualizar Produto
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Atualizar Produto */}
          <AtualizarProduto
            show={this.state.mostrarModalAtualizacao}
            onHide={() => this.setState({ mostrarModalAtualizacao: false })}
          />

          {/* Card - Excluir Produto */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={this.cardStyle}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Exclusão de Produto
                </h5>
                <p className="card-text text-center subtitleCard">
                  Exclua um produto do sistema de forma simples e rápida.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalExclusao: true })}
                  >
                    ❌ Excluir Produto
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Excluir Produto */}
          <ExcluirProduto
            show={this.state.mostrarModalExclusao}
            onHide={() => this.setState({ mostrarModalExclusao: false })}
          />

        </div>
      </div>
    );
  }
}
