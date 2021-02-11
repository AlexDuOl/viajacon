import React, { Component }from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//import { Container, Card, Header } from 'semantic-ui-react'
  
  const MyMapComponent = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  );
  
  

class MapComponent extends Component {
    render() {
      return (
        <MyMapComponent
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      );
    }
  }

export default MapComponent
