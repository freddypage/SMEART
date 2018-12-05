import React, { Component } from 'react';

// const AnyReactComponent = ({ text }) => <div style={{
    // width: '0',
    // height: '0',
    // borderLeft: '10px solid transparent',
    // borderRight: '10px solid transparent',
    // borderTop: '20px solid red'
//   }}>{text}</div>;


class Pin extends Component {
  constructor(props) {
    super(props);   
  }

  componentDidMount(){
    this.checkPrice(this.props.price,this.props.budget);  
  }

  state = { 
    background:'blue',
    style:{height:'auto'}
   };

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
    return (
      // Important! Always set the container height explicitly
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