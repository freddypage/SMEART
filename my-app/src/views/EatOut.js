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
    this.state = {
      isShow: true,
      pins: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // In our package.json we have to add the line "proxy": "http://localhost:3001/"
    // This will let Webpack know to proxy our API requests to our Express backend that will be running on port 3001
    this.callBackendAPI()
      .then(res => console.log(res)) //set data to the response from the fetch request
      .catch(err => console.log(err));
    //this.state.restaurants = callBackendAPI()
  }

  //API REquest
   callBackendAPI = async () => {
    const response = await fetch('/wallet/loc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "lattitude":"45.501690","longitude":"-73.567353" }),
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    var restaurants = [];
    for (var i = 0; i < body.restaurants.length; i++)
    {
      var rest = body.restaurants[i].restaurant;
      restaurants.push({'lng':rest.location.longitude,'lat':rest.location.latitude,'name':rest.name});
    }

    console.log(body);
    console.log(restaurants);

    this.setState({pins:restaurants});

    return restaurants;
  };

  render() {
    return (
      <div className="eat-out">
        <Header />
        <div className="side-bar">  

          <p>Restaurants</p>

        </div>

        <div className="main-bar">
            <Map
            pins={this.state.pins} 
            />
        </div>

      </div>
    );
  }
}
export default EatOut;
