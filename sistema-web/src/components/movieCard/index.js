import React, { Component } from "react";

import './style.css';
class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    const {name, url} = this.props;
    return (
      <div className="card">
      	<img alt={name} src={url}/>
      	<p>{name}</p>
      </div>
    );
  }
}
export default MovieCard;
