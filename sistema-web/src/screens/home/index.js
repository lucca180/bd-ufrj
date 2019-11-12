import React, { Component } from "react";
import Layout from '../../components/layout';
import MovieCard from '../../components/movieCard';
import * as Vibrant from 'node-vibrant'

import './style.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: "https://cdn.myanimelist.net/images/anime/1315/102961.jpg",
      name: "bokanapika",
      renderArr: [],
    }
  }

  teste = async () => {
    var palette = await Vibrant.from(this.state.url).getPalette();
    console.log(palette.Muted.getHex())
  }

  DisplayMovieCards = () => {
    var arr = [];

    for(var i = 0; i < 10; i++){
        arr.push(<MovieCard key={i} onClick={this.teste} name={this.state.name} url={this.state.url}/>)
    }

    //console.log(arr);
    this.setState({
      renderArr: arr,
    })
  }

  componentDidMount(){
    this.DisplayMovieCards();
  }

  render() {
    return (
      <Layout>
        <h2>Recomendado Para Você</h2>
        {this.state.renderArr}
      </Layout>
    );
  }
}
export default Home;
