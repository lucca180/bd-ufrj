import React, { Component } from "react";
import Layout from '../../components/layout';
import MovieCard from '../../components/movieCard';

import './style.css';
class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <Layout>
        <h2>Recomendado Para Você</h2>
        <div class="cards">
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
          <MovieCard name="Boku no Hero Academia" url={"https://cdn.myanimelist.net/images/anime/1315/102961.jpg"}/>
        </div>
      </Layout>
    );
  }
}
export default Home;
