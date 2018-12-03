/*
 * Base Google Map example
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './mgpwh.js';

export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// //import MapMarker from './mapMarker.js';
// import MyGreatPlaceWithHover from './mgpwh.js';

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 45.501690,
//       lng: -73.567253
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCGpT0dJD2ojaGOx_bVq20bIqNt8ggHkYU" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <MyGreatPlaceWithHover
//             latitude={this.props.lat}
//             longitude={this.props.lng}
//             text={'Test'}
//           />
//           <MyGreatPlaceWithHover
//             latitude={40}
//             longitude={-70}
//             text={'Test2'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;