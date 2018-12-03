// import React, { Component } from 'react';

// //Components
// import Header from '../components/headerComponent/header'; 
// import AuthForm from '../components/authComponents/authForm';


// class Login extends Component {

//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return (
//       <div>
//         <Header />
//         <AuthForm />
//       </div>
//     );
//   }
// }

// export default Login;

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Redirect} from "react-router";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/authenticate/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        //this.props.history.push('/home');
        //var Router = require('react-router');
        //Router.browserHistory.push('/home');
        return (<Route path="/home"/>);
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}
