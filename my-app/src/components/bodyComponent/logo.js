import React, { Component } from 'react';
import Canvas from './canvas';


class Logo extends Component {
    constructor(props) {
      super(props);
      this.state = { angle: 0 };
      //bind the update function
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
  
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    updateAnimationState() {
      this.setState(prevState => ({ angle: prevState.angle + 0.5 }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
  
    render() {
      return <Canvas angle={this.state.angle} />;
    }
  }

export default Logo