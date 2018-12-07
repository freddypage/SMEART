import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {pinStyle, pinStyleHover, bubbleStyleHover, bubbleStyle} from './pinStyles.js';

class Pin extends Component {
  // static propTypes = {
  //   // GoogleMap pass $hover props to hovered components
  //   // to detect hover it uses internal mechanism, explained in x_distance_hover example
  //   $hover: PropTypes.bool
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: PropTypes.string,
  //     price: PropTypes.number
  //   }
  // }

  // componentDidMount() {
  //   this.setState({name:this.props.name, price:this.props.price})
  // }
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool
  };  

  constructor(props) {
    super(props);
    this.state = {
      name: PropTypes.string,
      price: PropTypes.number
    }   
  }

  componentDidMount(){
    this.setState({name:this.props.name, price:this.props.price})
    this.checkPrice(this.props.price,this.props.budget);  
  }

  // state = { 
  //   background:'blue',
  //   style:{height:'auto'}
  //  };

  checkPrice(price,budget)
  {
    if(price<=budget)
    {
      this.setState({
        style:{width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid green'}
            
      });
    }
    else if(price/budget>1.5)
    {
      this.setState({
        style:{width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid red'}
      });
    }
    else 
    {
      this.setState({
        style:{width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid yellow'}
      });
    }
  }

   onChange(field, value) {
        this.checkPrice(this.state.price,this.state.budget);
    }

  render() {
    const pin = this.props.$hover ? pinStyleHover : pinStyle;
    const bubble = this.props.$hover ? bubbleStyleHover : bubbleStyle;
    const blurb = this.state.name +'';
    const price=  '\n Price: ' +this.state.price;

    return (
      // Important! Always set the container height explicitly
      // <div style={pin}>
      //   <div style={bubble}>
      //     <p>{blurb}</p>
      //     <p>{price}</p>
      //   </div>
      <div style={this.state.style} 
            lat={45.501690}
             lng={-73.567253} 
             budget={this.props.budget}
             price={this.props.price}
             onChange={this.onChange.bind(this)}>
      </div>
    );
  }
}

export default Pin;