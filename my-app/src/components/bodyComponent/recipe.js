import React, { Component } from 'react';
import './styles/recipe.css';


class Recipe extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recipe: {}
    }

  }

  handleRecipeLink() {

  }

  renderRecipes(recipe, index) {

    console.log("recipe name", recipe.title)

    return(
      <div className="recipe-container" target="_blank">
        
        <img src = {recipe.image} className="picture"/>
        

        <div className="content">
          <p >{recipe.title}</p>
        </div>
      </div>
    );

  }


  render() {

    console.log("recipe:", this.props.recipes[0])

    return (

        this.props.recipes.map(this.renderRecipes)
    );
  }

}

export default Recipe;




