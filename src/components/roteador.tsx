import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./footer";
import Cliente from "../pages/cliente";
import Pet from "../pages/pet";
import Produto from "../pages/produto";
import Servico from "../pages/servico";
import Header from "./header";
import Relatorio from "../pages/relatorio";

type State = {};

export default class Roteador extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(view: string) {
  
    window.location.href = `/${view.toLowerCase()}`;
  }

  render() {
    const botoes = ['Home', 'Cliente', 'Pet', 'Produto', 'Servico', 'Relatorio'];
    const tema = "rgb(255, 123, 0)";

    return (
      <>
        <Header seletorView={this.selecionarView} tema={tema} botoes={botoes} />
        <Routes>
          <Route path="/" element={<Home tema={tema} />} />
          <Route path="/home" element={<Home tema={tema} />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/servico" element={<Servico />} />
          <Route path="/relatorio" element={<Relatorio />} />
        </Routes>
        <Footer botoes={botoes} tema={tema} />
      </>
    );
  }
}
