import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import Geocode from "react-geocode";


export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
   // Geocode.setApiKey("AIzaSyB7u8Qzi6Ca4e5DwMN9uIRfJEnHDOKNEt8");
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("##############", position);
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
    Geocode.fromLatLng(this.state.userLocation.lat, this.state.userLocation.lng).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address,"********************");
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return <h3>Hiiiii</h3>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB7u8Qzi6Ca4e5DwMN9uIRfJEnHDOKNEt8"
})(MapContainer);

