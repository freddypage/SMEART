import React, { Component } from 'react';
//import './App.css';
//necessary import for Router
import {BrowserRouter, Route} from 'react-router-dom';
//import all of our pages to App
import Home from './views/home';
import EatIn from './views/eatIn';
import EatOut from './views/eatOut';

import Landing from './views/landing';
import Login from './views/login';
import SignUp from './views/signup';

//need to wrap HTML in app.js in <BrowserRouter>
//and give routes to new pages
class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // In our package.json we have to add the line "proxy": "http://localhost:3001/"
    // This will let Webpack know to proxy our API requests to our Express backend that will be running on port 3001
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express })) //set data to the response from the fetch request
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js)
  callBackendAPI = async () => {
    const response = await fetch('/express-backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="landing">
              <Landing />
            </div>
          )}/>
          <Route exact={true} path='/login' render={() => (
            <div className="login">
              <Login />
            </div>
          )}/>
          <Route exact={true} path='/signup' render={() => (
            <div className="signup">
              <SignUp />
            </div>
          )}/>
          <Route exact={true} path='/home' render={() => (
            <div className="home">
              <Home 
                data = {this.state.data}
              />
            </div>
          )}/>
          <Route exact={true} path='/eatIn' render={() => (
            <div className="eat-in">
              <EatIn />
            </div>
          )}/>
          <Route exact={true} path='/eatOut' render={() => (
            <div className="eat-out">
              <EatOut />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
