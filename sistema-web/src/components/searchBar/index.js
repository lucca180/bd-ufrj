import React, { Component } from "react";

// import './style.css';
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
      e.preventDefault(); // Ensure it is only this code that rusn
      this.props.searchFunction(this.state.searchQuery);
  	}
  }

  	render() {
      const {searchQuery} = this.state;
	    return (
	    	<div style={{display: 'inline', maxWidth: 150}}>
	      		<input onKeyPress={this.catchReturn} type="search" value={searchQuery} onChange={this.handleChange} placeholder="Pesquisar"/>
	      	</div>
	    );
  	}
}
export default SearchBar;
