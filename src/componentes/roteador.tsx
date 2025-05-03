import { Routes, Route, useNavigate } from "react-router-dom";
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa o JS do Bootstrap
import Footer from "./footer";
import Clientes from "./clientes";
import Pets from "./pets";
import Produtos from "./produtos";
import Servicos from "./servicos"


export default function Roteador() {
    const navigate = useNavigate();

    function selecionarView(view: string) {
        navigate(`/${view.toLowerCase()}`);
    }

    const botoes = ['Home', 'Clientes', 'Pets', 'Produtos', 'Servicos',];

    return (
        <>
            <BarraNavegacao seletorView={selecionarView} tema="rgb(255, 123, 0)" botoes={botoes} />
            <Routes>
                <Route path="/" element={<Home tema="rgb(255, 123, 0)" />} />
                <Route path="/home" element={<Home tema="rgb(255, 123, 0)" />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/pets" element={<Pets/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
            </Routes>

            <Footer botoes={botoes} tema="rgb(255,123,0)"/>
        </>
    );
}
