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
    this.state = { 
      background:'blue',
      style:{height:'auto'},
      budget:0,
      price:0
   }; 
  }

  componentDidMount(){
    this.checkPrice(this.props.price,this.props.budget);  
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.price !== prevProps.price) {
      this.checkPrice(this.props.price,this.props.budget);  
    }
  }

  checkPrice(price,budget)
  {
    if(price===0)
    {
      this.setState({
        style:{width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid grey'}
            
      });
    }
    else if(((price/budget)>1.5))
    {
      this.setState({
        style:{width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '20px solid red'}
      });
    }
    else if(price<=budget)
    {
      this.setState({
          style:{width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '20px solid green'}
              
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

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={this.state.style} 
            lat={45.501690}
             lng={-73.567253} 
             budget={parseInt(this.props.budget,10)}
             price={parseInt(this.props.price,10)}>
      </div>
    );
  }
}

export default Pin;