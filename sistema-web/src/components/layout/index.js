import React, { Component } from "react";

import SearchBar from '../searchBar';
import {styles} from './style.js';

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
    }

    // Alterar esses valores para alterar as cores do layout.
    // (Mexa e descubra oq cada um faz)
    // {
    //   left: "#141c25",
    //   sectionColor: "#616a77",
    //   secItem: "#fff",
    //   selItem: "#40bed3",
    //   catItem: "#818797",
    //   right: '#0d171f',
    // }
  }

  goTo = where => {
    this.props.history.push(where)
  }

  goToSearch = query => {
    this.props.history.push('/search/'+query)
  }

  render() {
    var style =  styles(this.props.colors ? this.props.colors : {})
    return (
      <div style={style.container}>

        <div style={style.leftColumn}>
          <SearchBar searchFunction={this.goToSearch}/>
          <div style={style.sectionWrapper}>
            <div style={style.section}>
              <p style={style.sectionName}>Navegar</p>
              <p onClick={() => this.goTo("/")} style={style.selectedItem}>Início</p>
              <p onClick={() => this.goTo("/popular")}style={style.sectionItem}>Populares</p>
              <p onClick={() => this.goTo("/top")}style={style.sectionItem}>TOP 25</p>
            </div>

            <div style={style.section}>
              <p style={style.sectionName}>Gêneros</p>
              <p style={style.catItemSel}>Todos</p>
              <p style={style.catItem}>Comédia</p>
              <p style={style.catItem}>Super Poderes</p>
              <p style={style.catItem}>Escola</p>
              <p style={style.catItem}>Aventura</p>
              <p style={style.catItem}>Fantasia</p>
              <p style={style.catItem}>Romance</p>
            </div>
          </div>
        </div>

        <div style={style.rightColumn}>
          {this.props.children}
        </div>

      </div>
    );
  }
}
export default Layout;
