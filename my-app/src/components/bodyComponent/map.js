import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import Marker from './Marker';

//CONST COMPONENT VERSION - REVERT TO THIS IF EXAMPLE DOESN'T WORK
const AnyReactComponent = ({ text }) => <div style={{
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '20px solid red'
  }}>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 45.501690,
      lng: -73.567253
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCGpT0dJD2ojaGOx_bVq20bIqNt8ggHkYU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          id='map'
        >
          <AnyReactComponent
            lat={45.501690}
            lng={-73.567253}
          />
          <AnyReactComponent
            lat={45.491504}
            lng={-73.577260}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;