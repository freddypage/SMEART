import React, { Component } from 'react';


import './styles/eatIn.css';


//Components
import Header from '../components/headerComponent/header'; 
import Box from '../components/bodyComponent/box';
import SideBar from'../components/bodyComponent/sideBar';
import PantryItem from '../components/bodyComponent/pantryItem';

class EatIn extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      isShow: true
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    var that = this;
    this.setState({ isShow: !that.state.isShow })
  }



  render() {
    return (
      <div className="eat-in">
        <Header />
        <div className="side-bar">  

          <p>Pantry</p>

          <div className="pantry">
            <p className="ingredients">Ingredients</p>
            <PantryItem/>
          </div>

          <p>New Ingredient</p>
          <div className="new-ingredient">
            <p>hello</p>

          </div>

        </div>

        <div className="main-bar">
          <p>Recipes</p>

          <div className="recipes">

          </div>
        </div>


      </div>
      
    );
  }
}

export default EatIn;
