import React, { Component } from 'react';

const title = {
    fontSize: '28px',
    color: 'red',
}

export default class Home extends Component {
    state = {
    }

    render () {
        return (
            <div id='container'>
                <h1 style={title}> EAT SMART </h1>
                <a href="login">Login</a>
                <p>{this.props.data}</p>
            </div>
        )
    } 
}