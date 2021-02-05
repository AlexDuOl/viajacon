import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Informacion from './components/Informacion';
import BitacoraComponent from './components/BitacoraComponent';
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="ui menu">
            <Link to="/" className="item">Inicio</Link>
            <Link to="/informacion" className="item">Información</Link>
            <Link to="/bitacoras/?id_servicio_especial=" className="item">Bitacora</Link>
            <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Buscar servicio..."/>
                <button className="ui primary button">Buscar</button>
              </div>
            </div>
            </div>
        </div>


        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/informacion/:folio">
            <Informacion />
          </Route>
          <Route>
            <BitacoraComponent path="/bitacoras/?id_servicio_especial=:folio" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}