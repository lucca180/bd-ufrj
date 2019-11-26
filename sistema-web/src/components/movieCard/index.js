import React, { Component } from "react";

import Placeholder from '../../assets/placeholder.png';

import './style.css';

class MovieCard extends Component {
  constructor(props) {
    super();
    this.state = {
      anime: {...props.anime}
    }
  }

  handle404 = () => {
    this.setState({
      anime: {
        ...this.state.anime,
        imagem: Placeholder
      }
    })
  }


  render() {
    const {nome_ingles, nome_japones, imagem, classificacao_etaria, ano_lancamento, duracao_ep, origem} = this.state.anime;
    return (
      <div onClick={() => this.props.clickF(this.props.anime)} className="card">
      	<img onError={this.handle404} alt={nome_ingles ? nome_ingles : nome_japones} src={imagem}/>
      	<p>{nome_ingles ? nome_ingles : nome_japones}</p>
        <div className="details">
          <p>{origem} · {duracao_ep}min · {ano_lancamento}</p>
          <p className="ageBox">{classificacao_etaria ? classificacao_etaria : "Não Classificado"}</p>
        </div>
      </div>
    );
  }
}
export default MovieCard;
