import React, { Component } from "react";

import './style.css';
class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      searchQuery: "",
    }
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value,
    })
  }

  catchReturn = e => {
  	if(e.key === 'Enter'){
      e.preventDefault();
      if(this.state.searchQuery === '') return;
      this.props.searchFunction(this.state.searchQuery);
  	}
  }

  	render() {
      const {searchQuery} = this.state;
	    return (
          <div className="container__item">
            <input onChange={this.handleChange} value={searchQuery} onKeyPress={this.catchReturn} type="search" className="form__field" placeholder="Pesquisar" />
          </div>
	    );
  	}
}
export default SearchBar;
