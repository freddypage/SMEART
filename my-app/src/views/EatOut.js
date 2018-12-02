import React, { Component } from 'react';


import './styles/eatOut.css';


//Components
import Header from '../components/headerComponent/header'; 
import Box from '../components/bodyComponent/box';
import SideBar from'../components/bodyComponent/sideBar';
import Map from '../components/bodyComponent/map';
//import Map from '../components/eatOutComponents/map';

class EatOut extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eat-out">
        <Header />
        <div className="side-bar">  

          <p>Restaurants</p>

        </div>

        <div className="main-bar">
            <Map />
        </div>

      </div>
    );
  }
}

export default EatOut;
