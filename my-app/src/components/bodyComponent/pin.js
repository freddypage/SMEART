import React, { Component } from 'react';

// const AnyReactComponent = ({ text }) => <div style={{
    // width: '0',
    // height: '0',
    // borderLeft: '10px solid transparent',
    // borderRight: '10px solid transparent',
    // borderTop: '20px solid red'
//   }}>{text}</div>;


class Pin extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ width: '0',
				    height: '0',
				    borderLeft: '10px solid transparent',
				    borderRight: '10px solid transparent',
				    borderTop: '20px solid green' }} lat={45.501690} lng={-73.567253}>
      </div>
    );
  }
}

export default Pin;