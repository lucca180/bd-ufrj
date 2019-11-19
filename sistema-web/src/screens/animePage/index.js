import React, { Component } from "react";
import Layout from '../../components/layout';
import Stars from '../../components/stars';

import './style.css';
class AnimePage extends Component {
  constructor(props) {
    super();
    this.state = {
    	anime: {},
    }
  }

  fetchAnimeInfo = async id => {
  	try{
      var res = await fetch("http://localhost:9000/getAnimeByID/"+id);
      res = await res.text();
      res = JSON.parse(res);

      this.setState({
        anime: {...res[0]}
      });

    }catch(e) {
      console.log(e);
    }
  }
 
  componentDidMount(){
  	const {match, location} = this.props;

  	if(location.state && location.state.nome_japones) this.setState({anime: {...location.state}});
  	else if(match.params.id) this.fetchAnimeInfo(match.params.id);
  }

  render() {
	const {nome_ingles, nome_japones, imagem, classificacao_etaria, ano_lancamento, duracao_ep, origem} = this.state.anime;
    console.log(this.state)
    return (
      <Layout>
        <h1 className="title">{nome_ingles ? nome_ingles : nome_japones}</h1>
        <div className="infos">
        	<div className="score"><Stars score={4}/> 4.3/5</div>
        	<div className="animeInfos">{origem} <span className="dot">·</span> {duracao_ep}min <span className="dot">·</span> {ano_lancamento} <span className="dot">·</span> <span className="ageBox">{classificacao_etaria} </span></div>
        </div>
      </Layout>
    );
  }
}
export default AnimePage;
