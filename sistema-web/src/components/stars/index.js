import React, { Component } from "react";

// import './style.css';
class Stars extends Component {

	isLighted = n => {
		return this.props.score >= n ? {color: '#40bed3'} : {opacity: 0.3};
	}

  	render() {
	    return (
	    	<div style={{display: 'inline'}}>
	      		<span style={this.isLighted(1)}>★</span> 
	      		<span style={this.isLighted(2)}>★</span> 
	      		<span style={this.isLighted(3)}>★</span>
	      		<span style={this.isLighted(4)}>★</span>
	      		<span style={this.isLighted(5)}>★</span>
	      	</div>
	    );
  	}
}
export default Stars;
