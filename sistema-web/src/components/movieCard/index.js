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
      	<img src={this.props.url}/>
      	<p>{this.props.name}</p>
      </div>
    );
  }
}
export default MovieCard;
