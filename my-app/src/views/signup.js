import React, { Component } from 'react';

//Components
import Header from '../components/headerComponent/header'; 
import AuthForm from '../components/authComponents/authForm';


class SignUp extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <AuthForm />
      </div>
    );
  }
}

export default SignUp;
