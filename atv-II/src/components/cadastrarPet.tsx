import { Component } from "react";
import "./margin.css"

type props = {
    tema: string
}

export default class CadastrarPet extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="margin-lista">
                        <h2 style={{ textAlign: "center" }}>Cadastrar um Pet</h2>
                    </div>
                    <div className="margin-lista">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Especie do Pet" aria-label="Especie do Pet" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Sexo do Pet" aria-label="Sexo do Pet" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}