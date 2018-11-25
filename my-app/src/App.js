import React, { Component } from 'react';
//import './App.css';
//necessary import for Router
import {BrowserRouter, Route} from 'react-router-dom';
//import all of our pages to App
import Home from './views/Home';
import Login from './views/Login';

//need to wrap HTML in app.js in <BrowserRouter>
//and give routes to new pages
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Login />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;