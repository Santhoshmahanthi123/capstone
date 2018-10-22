import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";






export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return <Map google={google} initialCenter={userLocation} zoom={10} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB7u8Qzi6Ca4e5DwMN9uIRfJEnHDOKNEt8"
})(MapContainer);








// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import React, { Component } from "react";

// export class Location extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
           
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyB7u8Qzi6Ca4e5DwMN9uIRfJEnHDOKNEt8')
// })(Location)