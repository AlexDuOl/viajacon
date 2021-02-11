import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import logo from '../src/images/logo.png';
import { Button, Image, Grid } from 'semantic-ui-react'

import InformacionContainer from './containers/InformacionContainer'
import BitacoraContainer from './containers/BitacoraContainer'
// import MapContainer from './containers/MapContainer'

export default class App extends Component {
  
  render() {
    function getData(event) {
      console.log(event.target.value);
    }
  
    function enviar() {
      console.log('Click');
    }

    return (
      <Router>
        <Switch>
        <Route exact path="/">
          <div className="ui container search-container">
            <div className="ui menu">
              <Link to="/" className="item">Inicio</Link>
              <Link to="/informacion" className="item">Información</Link>
              <Link to="/bitacoras?id_servicio_especial=" className="item">Bitacora</Link>
            </div>
            <div className="ui container">
                <div className="row">
                  <div className="column">
                    <div className="ui input">
                      <input name="search" type="text" onChange={getData} placeholder="Buscar servicio..."/>
                      <button className="ui orange button" type="submit" onClick={() => {enviar()}}>Buscar</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </Route>
        
        <Fragment>
          <div className="general-container">
              <Grid container columns={1}>
                <Grid.Row centered className="logo-container">
                  <Image src={logo} size='small' />
                </Grid.Row>

                <Route path="/informacion/:folio">
                  <InformacionContainer/>
                </Route>
              

                <Route>
                  <BitacoraContainer path="/bitacoras?id_servicio_especial=:folio" />
                </Route>
                
                {/* <MapContainer/> */}

                <Button fluid color='orange' size='large' href="https://suma.mx/cotizacion/" target="_blank">Solicitar una nueva cotización</Button>
              </Grid>
            </div>
          </Fragment>
        </Switch>
      </Router>
    );
  }
}