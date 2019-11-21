import React, { Component } from "react";
import Layout from '../../components/layout';
import MovieCard from '../../components/movieCard';

import './style.css';
class Genre extends Component {
  constructor() {
    super();
    this.state = {
      animes: []
    }
  }

  connectDB = async () => {
    try{
      var name = this.props.match.params.name;
      var res = await fetch("http://localhost:9000/getAnimeByGenre/"+name+"/25");
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
    console.log(this.props)
    this.connectDB();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.name !== prevProps.match.params.name){
      this.connectDB();
    }
  }

  render() {

    return (
      <Layout history={this.props.history}>
        <h2>{this.props.match.params.name ? this.props.match.params.name : ''} Animes</h2>
        <div className="cards">
          {this.state.animes.length !== 0 && <this.RenderCards/>}
        </div>
      </Layout>
    );
  }
}
export default Genre;
