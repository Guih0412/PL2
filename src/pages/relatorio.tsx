import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ProdutoConsumoCliente from "../components/relatorio/produto/produtoConsumoCliente";
import ProdutoTop10ClientesQuantidade from "../components/relatorio/produto/produtoTop10ClientesQuantidade";
import ProdutosMaisConsumidos from "../components/relatorio/produto/produtosMaisConsumidos";
import ProdutosPorTipo from "../components/relatorio/produto/produtosPorTipo";
import ProdutosPorRaca from "../components/relatorio/produto/produtosPorRaca";
import ProdutoTop5ClientesValor from "../components/relatorio/produto/produtoTop5ClientesValor";

import ServicoConsumoCliente from "../components/relatorio/servico/servicoConsumoCliente";
import ServicoTop10ClientesQuantidade from "../components/relatorio/servico/servicoTop10ClientesQuantidade";
import ServicosMaisConsumidos from "../components/relatorio/servico/servicosMaisConsumidos";
import ServicosPorTipo from "../components/relatorio/servico/servicosPorTipo";
import ServicosPorRaca from "../components/relatorio/servico/servicosPorRaca";
import ServicoTop5ClientesValor from "../components/relatorio/servico/servicoTop5Clientes";



export default class Relatorio extends Component {
  state = {
    mostrarModalProdutoConsumoCliente: false,
    mostrarModalProdutoTop10ClientesQuantidade: false,
    mostrarModalProdutoProdutosMaisConsumidos: false,
    mostrarModalProdutoProdutosPorTipo: false,
    mostrarModalProdutoProdutosPorRaca: false,
    mostrarModalProdutoTop5ClientesValor: false,

    mostrarModalServicoConsumoCliente: false,
    mostrarModalServicoTop10ClientesQuantidade: false,
    mostrarModalServicoProdutosMaisConsumidos: false,
    mostrarModalServicoProdutosPorTipo: false,
    mostrarModalServicoProdutosPorRaca: false,
    mostrarModalServicoTop5ClientesValor: false,
  };

  render() {
    const cardStyle = {
      borderColor: "#5c4033",
      backgroundColor: "rgb(255, 161, 106)",
      transition: "transform 0.2s",
      cursor: "pointer",
    };

    const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
    };

    const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
    };

    return (
      <div className="container-fluid mt-5 text-center">
        <div className="d-flex align-items-center justify-content-center gap-3 title mt-5">
          <img src="/cliente.png" style={{ width: "70px" }} />
          <h1 style={{ fontSize: "300%" }}>Menu de Relatórios</h1>
        </div>

        <hr className="line" />

        <div className="row justify-content-center">

          {/* Card - Mais consumidos por Cliente */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Consumo por Cliente
                </h5>
                <p className="card-text text-center subtitleCard">
                  Produtos e serviços mais consumidos por cliente
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoConsumoCliente: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoConsumoCliente: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal - Produto */}
          <ProdutoConsumoCliente
            show={this.state.mostrarModalProdutoConsumoCliente}
            onHide={() => this.setState({ mostrarModalProdutoConsumoCliente: false })}
          />

          {/* Modal - Servico */}
          <ServicoConsumoCliente
            show={this.state.mostrarModalServicoConsumoCliente}
            onHide={() => this.setState({ mostrarModalServicoConsumoCliente: false })}
          />



          {/* Card - Top 10 Clientes (Quantidade) */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Top 10 Clientes (Qtd)
                </h5>
                <p className="card-text text-center subtitleCard">
                  Ranking dos clientes que mais consumiram 
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoTop10ClientesQuantidade: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoTop10ClientesQuantidade: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modais */}
          <ProdutoTop10ClientesQuantidade
            show={this.state.mostrarModalProdutoTop10ClientesQuantidade}
            onHide={() => this.setState({ mostrarModalProdutoTop10ClientesQuantidade: false })}
          />
          <ServicoTop10ClientesQuantidade
            show={this.state.mostrarModalServicoTop10ClientesQuantidade}
            onHide={() => this.setState({ mostrarModalServicoTop10ClientesQuantidade: false })}
          />

        </div>

        <div className="row justify-content-center">

          {/* Card - Produtos/Serviços Mais Consumidos */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Itens mais consumidos
                </h5>
                <p className="card-text text-center subtitleCard">
                  Itens mais procurados pelos clientes em geral
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoProdutosMaisConsumidos: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoProdutosMaisConsumidos: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modais */}
          <ProdutosMaisConsumidos
            show={this.state.mostrarModalProdutoProdutosMaisConsumidos}
            onHide={() => this.setState({ mostrarModalProdutoProdutosMaisConsumidos: false })}
          />
          <ServicosMaisConsumidos
            show={this.state.mostrarModalServicoProdutosMaisConsumidos}
            onHide={() => this.setState({ mostrarModalServicoProdutosMaisConsumidos: false })}
          />


          {/* Card - Top 5 Clientes (Valor) */}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Top 5 Clientes (Valor)
                </h5>
                <p className="card-text text-center subtitleCard">
                  Clientes que mais consumiram em valor total
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoTop5ClientesValor: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoTop5ClientesValor: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modais */}
          <ProdutoTop5ClientesValor
            show={this.state.mostrarModalProdutoTop5ClientesValor}
            onHide={() => this.setState({ mostrarModalProdutoTop5ClientesValor: false })}
          />
          <ServicoTop5ClientesValor
            show={this.state.mostrarModalServicoTop5ClientesValor}
            onHide={() => this.setState({ mostrarModalServicoTop5ClientesValor: false })}
          />
        </div>

        <div className="row justify-content-center">
          {/* Card - Consumo por Tipo*/}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Consumo por Tipo de Animal
                </h5>
                <p className="card-text text-center subtitleCard">
                  Análise detalhada por tipo de pet
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoProdutosPorTipo: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoProdutosPorTipo: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modais */}
          <ProdutosPorTipo
            show={this.state.mostrarModalProdutoProdutosPorTipo}
            onHide={() => this.setState({ mostrarModalProdutoProdutosPorTipo: false })}
          />
          <ServicosPorTipo
            show={this.state.mostrarModalServicoProdutosPorTipo}
            onHide={() => this.setState({ mostrarModalServicoProdutosPorTipo: false })}
          />

          {/* Card - Consumo por Raça*/}
          <div className="col-md-3 col-sm-12 mb-4">
            <div
              className="card shadow"
              style={cardStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="card-body">
                <h5 className="card-title text-center titleCard" style={{ color: "rgb(69,32,23)" }}>
                  Consumo por Raça
                </h5>
                <p className="card-text text-center subtitleCard">
                  Análise detalhada por raça de pet
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalProdutoProdutosPorRaca: true })}
                  >
                    Produtos
                  </Button>

                  <Button
                    variant="warning"
                    className="mt-3 btn text-white"
                    style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
                    onClick={() => this.setState({ mostrarModalServicoProdutosPorRaca: true })}
                  >
                    Serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Modais */}
          <ProdutosPorRaca
            show={this.state.mostrarModalProdutoProdutosPorRaca}
            onHide={() => this.setState({ mostrarModalProdutoProdutosPorRaca: false })}
          />
          <ServicosPorRaca
            show={this.state.mostrarModalServicoProdutosPorRaca}
            onHide={() => this.setState({ mostrarModalServicoProdutosPorRaca: false })}
          />

        </div>
      </div >
    );
  }
}
