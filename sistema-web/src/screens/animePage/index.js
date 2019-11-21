import React, { Component } from "react";
import Layout from '../../components/layout';
import Stars from '../../components/stars';
import PieView from '../../components/charts/pie.js';
import BarView from '../../components/charts/bar.js';
import MovieCard from '../../components/movieCard';

import './style.css';
class AnimePage extends Component {
  constructor(props) {
    super();
    this.state = {
    	anime: {},
      	genderData: [],
	    score: "",
	    studios: "",
	    genres: "",
	    countryRank: [],
	    fromStudio: [],
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

      await this.fetchOtherData(id);

    }catch(e) {
      console.log(e);
    }
  }

  fetchOtherData = async id => {
    var genderData = await fetch("http://localhost:9000/getAnimeGenderCount/"+id);
    genderData = await genderData.text();
    genderData = JSON.parse(genderData);

    var score =  await fetch("http://localhost:9000/getScoreByID/"+id);
   	score = await score.text();
   	score = JSON.parse(score)[0]["AVG(nota)"];
   	score = parseFloat(score)/2
   	score = score.toFixed(1);

   	var studios = await fetch("http://localhost:9000/getStudioByID/"+id)
   	studios = await studios.text();
   	studios = JSON.parse(studios)[0]["nome_estudio"];

   	var genres = await fetch("http://localhost:9000/getGenreByID/"+id)
   	genres = await genres.text();
   	genres = JSON.parse(genres)[0]["nome_genero"];

   	var countryRank = await fetch("http://localhost:9000/getAnimeCountryRank/"+id)
   	countryRank = await countryRank.text();
   	countryRank = JSON.parse(countryRank);

   	var fromStudio = await fetch("http://localhost:9000/getFromStudio/"+id+"/5")
   	fromStudio = await fromStudio.text();
   	fromStudio = JSON.parse(fromStudio);
   	console.log(fromStudio);

    this.setState({
      genderData: genderData,
      score: score,
      studios: studios,
      genres: genres,
      countryRank: countryRank,
      fromStudio: fromStudio,
    })
  }

  goToAnime = anime => {
	this.props.history.push('/anime/'+anime.animeID, anime);
	this.setState({
		anime: anime,
	})

	this.fetchOtherData(anime.animeID);
  window.scrollTo(0, 0);

  }

  RenderCards = () => {
    var cardsArr = this.state.fromStudio.map(anime => {
      return <MovieCard key={anime.animeID} clickF={this.goToAnime} anime={anime}/>;
    })

    return cardsArr;
  }

  handle404 = () => {
    this.setState({
      anime: {
        ...this.state.anime,
        imagem: "https://via.placeholder.com/250x300"
      }
    })
  }

  componentDidMount(){
  	const {match, location} = this.props;

  	if(location.state && location.state.nome_japones){
      this.setState({anime: {...location.state}});
      this.fetchOtherData(location.state.animeID)
    }
    else if(match.params.id) {
      this.fetchAnimeInfo(match.params.id);
      this.fetchOtherData(match.params.id);
    }
  }

  render() {
	const {nome_ingles, nome_japones, imagem, classificacao_etaria, numero_episodios,  ano_lancamento, duracao_ep, origem, no_ar} = this.state.anime;
	const {score, studios, genres, genderData, countryRank} = this.state;
    console.log(this.state)
    return (
      <Layout history={this.props.history}>
        <div className="headerInfos">
       		<img onError={this.handle404} alt={nome_japones} src={imagem}/>
       		<div className="infos">
		        <h1 className="title">{nome_ingles ? nome_ingles : nome_japones}</h1>
		        <div className="otherInfos">
		        	<div className="score"><Stars score={score}/> {score}/5</div>
		        	<div className="animeInfos">
		        		{genres} <span className="dot">·</span>
		        		{origem} <span className="dot">·</span> 
		        		{numero_episodios > 1 ? numero_episodios + " episódios" : "Filme"} <span className="dot">·</span> 
		        		{duracao_ep}min <span className="dot">·</span> 
		        		{ano_lancamento} <span className="dot">·</span>
		        		{studios} <span className="dot">·</span>
		        		{no_ar ? "Transmitindo" : "Finalizado"} <span className="dot">·</span> 
		        		<span className="ageBox">{classificacao_etaria}</span>
		        	</div>
		        </div>
		    </div>
	    </div>
	    <div className="content">
	    	<div className="charts">
		    	<div className="chartBox">
		    		<h2>Espectadores por gênero</h2>
		    		<PieView data={genderData}/>
		    	</div>
		    	<div className="chartBox">
		    		<h2>Espectadores por país</h2>
		    		<BarView data={countryRank}/>
		    	</div>
		    </div>
		    <div className="sugestions">
		    	<h2>Animes do Mesmo Estúdio</h2>
		    	<div className="cardList"><this.RenderCards/></div>
		    </div>
	    </div>
      </Layout>
    );
  }
}
export default AnimePage;
