import React, { Component } from "react";
import Layout from '../../components/layout';
import MovieCard from '../../components/movieCard';

import './style.css';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      animes: []
    }
  }

  connectDB = async () => {
    try{
      var res = await fetch("http://localhost:9000/homeAnimes");
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
    return (
      <Layout>
        <h2>Recomendado Para Você</h2>
        <div className="cards">
          {this.state.animes.length !== 0 && <this.RenderCards/>}
        </div>
      </Layout>
    );
  }
}
export default Home;
