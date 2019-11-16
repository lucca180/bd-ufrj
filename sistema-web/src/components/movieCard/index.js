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
        <div className="details">
          <p>Ação · 23min · 2010</p>
          <p className="ageBox">+18</p>
        </div>
      </div>
    );
  }
}
export default MovieCard;
