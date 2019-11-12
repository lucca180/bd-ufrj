import React, { Component } from "react";

import './style.css';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className="container">

        <div className="leftColumn">
          <div className="section">
            <p className="sectionName">Navegar</p>
            <p className="sectionItem selectedItem">Descobrir</p>
            <p className="sectionItem">TV e Filmes</p>
            <p className="sectionItem">Populares</p>
            <p className="sectionItem">Listas</p>
          </div>

          <div className="section categories">
            <p className="sectionName">Gêneros</p>
            <p className="sectionItem selectedItem">Ação</p>
            <p className="sectionItem">Comédia</p>
            <p className="sectionItem">Super Poderes</p>
            <p className="sectionItem">Escola</p>
            <p className="sectionItem">Aventura</p>
            <p className="sectionItem">Fantasia</p>
            <p className="sectionItem">Romance</p>
          </div>
        </div>

        <div className="rightColumn">
          {this.props.children}
        </div>

      </div>
    );
  }
}
export default Layout;
