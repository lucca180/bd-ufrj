import React, { Component } from "react";

import './style.css';
class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    const {nome_ingles, nome_japones, imagem, classificacao_etaria, ano_lancamento, duracao_ep, origem} = this.props.anime;
    return (
      <div className="card">
      	<img alt={nome_ingles ? nome_ingles : nome_japones} src={imagem}/>
      	<p>{nome_ingles ? nome_ingles : nome_japones}</p>
        <div className="details">
          <p>{origem} · {duracao_ep}min · {ano_lancamento}</p>
          <p className="ageBox">{classificacao_etaria}</p>
        </div>
      </div>
    );
  }
}
export default MovieCard;
