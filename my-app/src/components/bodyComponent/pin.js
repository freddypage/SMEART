import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {pinStyle, pinStyleHover, bubbleStyleHover, bubbleStyle} from './pinStyles.js';

class Pin extends Component {
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

  componentDidMount() {
    this.setState({name:this.props.name, price:this.props.price})
  }

  render() {
    const pin = this.props.$hover ? pinStyleHover : pinStyle;
    const bubble = this.props.$hover ? bubbleStyleHover : bubbleStyle;
    const blurb = this.state.name +'';
    const price=  '\n Price: ' +this.state.price;

    return (
      // Important! Always set the container height explicitly
      <div style={pin}>
        <div style={bubble}>
          <p>{blurb}</p>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

export default Pin;