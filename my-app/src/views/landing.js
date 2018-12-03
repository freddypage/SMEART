import React, { Component } from 'react';

import './styles/landing.css';

//Components
import Header from '../components/headerComponent/header'; 
import Box from '../components/bodyComponent/box';


class Landing extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
 
        <div className="Container">
            <Box 
                className="left"
                title={"Login"}
                href={"login"}
            />

            <Box 
                className="right"
                title={"Sign Up"}
                href={"signup"}
            />
        </div>
      </div>
      
    );
  }
}

export default Landing;
