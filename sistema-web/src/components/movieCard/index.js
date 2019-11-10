import React, { Component } from "react";

import './style.css';
class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  

  render() {
    return (
      <div className="card">
      	<img src="https://cdn.myanimelist.net/images/anime/1315/102961.jpg"/>
      	<p>Boku no Hero Academia</p>
      </div>
    );
  }
}
export default MovieCard;