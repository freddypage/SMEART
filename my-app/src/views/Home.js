import React, { Component } from 'react';
//Import for Router
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/home.css';

//Components
import Header from '../components/headerComponent/header'; 
import Box from '../components/bodyComponent/box';
import SideBar from '../components/bodyComponent/sideBar';


class Home extends Component {

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
      <div className="App">
        <p>{this.props.data}</p>

        <Header />
 
        <div className="Container">
          <Box 
            className="left"
            handleClick={this.handleClick}
            title={"Eat In"}
            school={"UBC"}
            href={"eatIn"}
          />

          <Box 
            className="right"
            title={"Eat Out"}
            school={"McGill University"}
            href={"eatOut"}
          />
        </div>
      </div>
      
    );
  }
}

export default Home;
