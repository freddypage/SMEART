import React, { Component } from 'react';
import './styles/pantry.css';


class Pantry extends Component {

  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this);
    this.renderIngredient = this.renderIngredient.bind(this);
  }

  handleRemove(index) {
    console.log("index", index)
    this.props.handleDeleteCallback(index);

  }

  renderIngredient(ingredient, index) {
    return (
      <li key={index}>
        <button onClick={this.handleRemove.bind(this, index)}>
          Delete
        </button>
        {ingredient.name}
      </li>
    );
  }


  render() {

    return (

      <ul className="pantry"> 
      {
        this.props.ingredients.map(this.renderIngredient)
      }
      </ul>

    );
  }

}

export default Pantry;




