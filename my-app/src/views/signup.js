// import React, { Component } from 'react';

// //Components
// import Header from '../components/headerComponent/header'; 
// import AuthForm from '../components/authComponents/authForm';


// class SignUp extends Component {

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

// export default SignUp;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: false
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
      fetch('/authenticate/signup', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          const error = new Error(res.error);
          throw error;
        }
      }).then(response=>
      {
        console.log(response);
        console.log(response.id);
        this.setState({redirect: true});
        this.props.callback(response.id);
      }).catch(err => {
        console.error(err);
        alert('Error signing up, please try again with a different username');
      });
  }

  render() {
    if(!this.state.redirect) {
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Sign up Below!</h1>
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
    } else {
      return(
        <Redirect to='/home'/>
      );
    }
  }
}
