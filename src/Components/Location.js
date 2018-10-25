import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import Geocode from "react-geocode";


export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true , address: null};

  componentWillMount() {
   Geocode.setApiKey("AIzaSyABr5_Vg24LPsXq_sdk23S7cz58iGAa0hg");
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("##############", position);
        const { latitude, longitude } = position.coords;
        
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
        Geocode.fromLatLng(latitude, longitude).then(
          response => {
            const address = response.results[0].formatted_address;
            console.log(response.results[0],"**********ADDRESS**********");
            console.log(response.results[0].short_name,"**********ADDRESS**********");
            this.setState({
              address: address
            })
          },
          error =>{
            console.log(error)
          }
        );
      
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

    return <h3>{this.state.address}</h3>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB7u8Qzi6Ca4e5DwMN9uIRfJEnHDOKNEt8"
})(MapContainer);

