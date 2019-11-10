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
        <MovieCard/>  <MovieCard/> <MovieCard/> <MovieCard/> <MovieCard/> <MovieCard/> <MovieCard/>
      </Layout>
    );
  }
}
export default Home;