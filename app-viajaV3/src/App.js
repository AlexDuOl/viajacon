import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Informacion from './components/Informacion';
import BitacoraComponent from './components/BitacoraComponent';
import './App.css'
import 'semantic-ui-css/semantic.min.css'

export default function App() {

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
                <Link to="/bitacoras/?id_servicio_especial=" className="item">Bitacora</Link>
              </div>
              <div className="ui container input-container">
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
            <div className="sections-container">
              <Route path="/informacion/:folio">
                <Informacion />
              </Route>
              <Route path="/bitacoras/?id_servicio_especial=:folio">
                <BitacoraComponent />
              </Route>
            </div>
          </Fragment>
        </Switch>

    </Router>
  );
}

