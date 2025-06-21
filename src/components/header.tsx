import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    seletorView: (view: string) => void
}

export default class Header extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            return this.props.botoes.map(valor =>
                <li key={valor} className="nav-item">
                    <button
                        className="nav-link btn btn-link"
                        onClick={() => this.props.seletorView(valor)}
                        style={{ textTransform: 'capitalize' }}
                    >
                        {valor}
                    </button>
                </li>
            );
        }
    }

    render() {
        const tema = this.props.tema;
        return (
            <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                <div className="container-fluid">
                    {/* Botão de alternância para telas pequenas */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar com comportamento responsivo */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex w-100 justify-content-between ">
                            {/* Lista com o botão "Home" alinhado à esquerda */}
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn mx-1 d-flex align-items-center gap-3"
                                        onClick={() => this.props.seletorView('Home')}
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            padding: 0,
                                        }}
                                    >
                                        
                                        <img
                                            src="/icone.png"
                                            alt="Home"
                                            style={{ height: "40px" }}
                                            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
                                            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                                        />

                                        <span className="title" style={{fontSize:"30px"}}>Pet Lovers</span>

                                    </button>
                                </li>
                            </ul>

                            {/* Lista com os outros botões alinhados à direita */}
                            <ul className="navbar-nav ms-auto">
                                {this.props.botoes.filter(b => b !== 'Home').map(valor => (
                                    <li key={valor} className="nav-item mx-1 ">
                                        <button className="nav-link btn btn-link" onClick={() => this.props.seletorView(valor)}
                                            style={{
                                                color: 'white',
                                                backgroundColor: "rgb(72, 40, 33)", border: '1px solid rgb(70, 23, 3)', borderRadius: '5px',
                                                padding: '0.375rem 0.75rem',
                                                marginRight: "10px"
                                            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgb(46, 16, 8)"}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgb(69,32,23)"}  >{valor}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
