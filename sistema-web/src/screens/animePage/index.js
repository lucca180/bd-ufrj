import React, { Component } from "react";
import Layout from '../../components/layout';

import * as Vibrant from 'node-vibrant'

// import './style.css';
class AnimePage extends Component {
  constructor(props) {
    super();
    this.state = {
		colors: null,
    }
  
  }
 
 getColor = async (url) => {
 
	var cores = await Vibrant.from('https://cors-anywhere.herokuapp.com/' + url).getPalette();
	var corPrincipal = cores.DarkVibrant.getHex();
	var corSecundaria = cores.LightMuted.getHex();
	var textoPrincipal = cores.Muted.getTitleTextColor();
	var textoSecundario = cores.Muted.getBodyTextColor();
	
	var coresObj = {
	
		left: corSecundaria,
		right: corPrincipal,
		secItem: textoPrincipal,
		catItem: textoSecundario,
	
		}
		
	this.setState({
		colors: coresObj
	});
	
	return coresObj;
 
 }
 
  componentDidMount(){
	 this.getColor(this.props.location.state.imagem);

  }

  render() {
	const {nome_ingles, nome_japones, imagem, classificacao_etaria, ano_lancamento, duracao_ep, origem} = this.props.location.state;
    return (
      <Layout colors={this.state.colors}	>
        <h2>{nome_ingles ? nome_ingles : nome_japones}</h2>
      </Layout>
    );
  }
}
export default AnimePage;
