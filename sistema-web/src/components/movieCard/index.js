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
      <div onClick={this.props.onClick} className="card">
      	<img src={this.props.url ? this.props.url : "https://via.placeholder.com/225x319.png"}/>
      	<p>{this.props.name}</p>
      </div>
    );
  }
}
export default MovieCard;
