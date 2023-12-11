import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

export default class ListaProdutos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <div className="margin-lista">
                    <h2 style={{ textAlign: "center" }}>Listagem de produtos</h2>
                        <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 2</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 4</a>
                        <a href="#" className="list-group-item list-group-item-action">Produto 5</a>
                    </div>
                </div>
            </div>
        )
    }
}