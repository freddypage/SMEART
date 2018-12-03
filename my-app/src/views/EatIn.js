import React, { Component } from 'react';


import './styles/eatIn.css';


//Components
import Box from '../components/bodyComponent/box';
import Header from '../components/headerComponent/header';
import PantryItem from '../components/bodyComponent/pantryItem';
import Pantry from '../components/bodyComponent/pantry';
import Recipe from '../components/bodyComponent/recipe';
import SideBar from'../components/bodyComponent/sideBar';



class EatIn extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      ingredients:[],
      ingredient:'',
      recipes: [] 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteCallback = this.handleDeleteCallback.bind(this);

  }

  componentDidMount() {
    fetch('/pantry/recipes/5c0093335bfde80711b2fbff')
      .then(res => {
          console.log(res);
          return res.json()
       })
      .then(recipes => { 
          this.setState({ recipes: recipes })
       });

    fetch('/pantry/pantry/5c0093335bfde80711b2fbff')
      .then(res => {
          console.log(res);
          return res.json()
       })
      .then(ingredients => { 

          this.setState({ ingredients: ingredients })
    });

  }


  handleDeleteCallback(index) {
    console.log("PARENT handleDeleteCallback", index)
    
    this.setState({
        ingredients: this.state.ingredients.filter(function (e, i) {
        return i !== index;
      })
    });
  }

  handleChange(event) {
    this.setState({ingredient: event.target.value});
  }

  handleSubmit(event) {
    console.log("event", event.target.value)
    var ingredients = this.state.ingredients

    if (this.state.ingredient == "") {
        alert("Name must be filled out");
        return false;
    } else {
      ingredients.push(this.state.ingredient)

      this.setState({
        ingredients: ingredients,
        ingredient: ''
      })

      event.preventDefault();
    }


    
  }


  render() {

    console.log("API RESPONSE: ", this.state.ingredients)
    var recipes = this.state.recipes
    var ingredients = this.state.ingredients

    return (
      <div className="eat-in">

       

        <div className="side-bar">  

          <p>Pantry</p>

          <Pantry 
            className="pantry"
            ingredients= {ingredients}
            handleDeleteCallback= {this.handleDeleteCallback}
          />

          <p>New Ingredient</p>

           
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="ingredient" value={this.state.ingredient} placeholder="New ingredient" onChange={this.handleChange} /> 
            <input type="submit" id="submit" value="Add" />
          </form>

          <button id="save">Save & Search</button>

         
        </div>


        <div className="main-bar">
          <p>Recipes</p>

          <div className="recipes">

            <Recipe
              recipes={this.state.recipes}
            />

          </div>
        </div>


      </div>
      
    );
  }
}

export default EatIn;
