import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Listagem de serviços</h2>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 1</a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 4</a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 5</a>
                    </div>
                </div>
            </div>
        )
    }
}