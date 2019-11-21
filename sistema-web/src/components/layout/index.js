import React, { Component } from "react";

import SearchBar from '../searchBar';
import {styles} from './style.js';

class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      genres: [],
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

    this.style =  styles(props.colors ? props.colors : {})
  }

  getGenreList = async () => {
    try{
      var res = await fetch("http://localhost:9000/getGenreQtRank/10");
      res = await res.text();
      res = JSON.parse(res);

      console.log(res);

      this.setState({
        genres: res
      });
    }catch(e) {
      console.log(e);
    }
  }

  RenderGenres = () => {
    var genreArr = this.state.genres.map(genre => {
      return <p onClick={() => this.goTo("/genre/"+genre.nome_genero)} key={genre.nome_genero} style={this.style.catItem}>{genre.nome_genero}</p>;
    })

    return genreArr;
  }

  goTo = where => {
    this.props.history.push(where)
  }

  goToSearch = query => {
    this.props.history.push('/search/'+query)
  }

  componentDidMount(){
    this.getGenreList()
  }

  render() {
    const {style} = this;
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
              <p onClick={() => this.goTo("/")} style={style.catItemSel}>Todos</p>
              <this.RenderGenres/>
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
