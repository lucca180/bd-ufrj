import React, { Component } from "react";
import Layout from '../../components/layout';
import MovieCard from '../../components/movieCard';

import './style.css';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      animes: []
    }
  }

  connectDB = async () => {
    try{
      const {query} = this.props.match.params;
      var res = await fetch("http://localhost:9000/searchAnimeByName/"+query);
      res = await res.text();
      res = JSON.parse(res);

      console.log(res);

      this.setState({
        animes: res
      });
    }catch(e) {
      console.log(e);
    }
  }

  RenderCards = () => {
    var cardsArr = this.state.animes.map(anime => {
      return <MovieCard key={anime.animeID} clickF={this.goToAnime} anime={anime}/>;
    })

    return cardsArr;
  }

  goToAnime = anime => {
	   this.props.history.push('/anime/'+anime.animeID, anime);
  }

  componentDidMount(){
    this.connectDB();
  }

  render() {
    const {query} = this.props.match.params;

    return (
      <Layout history={this.props.history}>
        <h2>Resultados da sua pesquisa por {query}</h2>
        <div className="cards">
          {this.state.animes.length !== 0 && <this.RenderCards/>}
        </div>
      </Layout>
    );
  }
}
export default Search;
