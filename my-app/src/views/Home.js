import React, { Component } from 'react';
//Import for Router
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/home.css';

//Components
import Header from '../components/headerComponent/header'; 
import Box from '../components/bodyComponent/box';
import Logo from '../components/bodyComponent/logo';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">

        <Header />
        <div className="Container">
          <Logo />
        </div>
        <div className="Container">

          <Box 
            className="left"
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
