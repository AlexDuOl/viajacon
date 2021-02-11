import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Container, Card, Header } from 'semantic-ui-react'

const MyComponent = withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 20.633848, lng: -103.43247 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 20.633848, lng:-103.43247 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)

class MapContainer extends Component {
   /*state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
        this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }*/

    render() {
        return (
            <div className="generalContainer">
            <Container fluid>
                <Header as="h3" textAlign="center">Datos del servicio</Header>
                <p className="blackText subTitle">Sigue la ruta del servicio contratado</p>
            </Container>
                <MyComponent
                   /* isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}*/
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>

        )
    }
}

export default MapContainer