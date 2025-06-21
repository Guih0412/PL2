import { Routes, Route, useNavigate } from "react-router-dom";
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


export default function Roteador() {
    const navigate = useNavigate();

    function selecionarView(view: string) {
        navigate(`/${view.toLowerCase()}`);
    }

    const botoes = ['Home', 'Cliente', 'Pet', 'Produto', 'Servico','Relatorio'];

    return (
        <>
            <Header seletorView={selecionarView} tema="rgb(255, 123, 0)" botoes={botoes} />
            <Routes>
                <Route path="/" element={<Home tema="rgb(255, 123, 0)" />} />
                <Route path="/home" element={<Home tema="rgb(255, 123, 0)" />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/pet" element={<Pet/>}/>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/servico" element={<Servico/>}/>
                <Route path="/relatorio" element={<Relatorio/>}/>
            </Routes>

            <Footer botoes={botoes} tema="rgb(255,123,0)"/>
        </>
    );
}
