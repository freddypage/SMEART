import React, { Component } from 'react';
import './styles/box.css';

class Box extends Component {

	render() {

	  	console.log("Hello world " + this.props.title);
	  	console.log(this.props.school)

	    return (
	      <div className="Box">

	      	<button 
	      		className="button"
	      		onClick = {this.props.handleClick} 
	      	>
	      		<a href={this.props.href}>{this.props.title}</a>
	      	</button>

	      </div>

	    );
	}
}

export default Box;