import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DatosAtributos from './components/DatosAtributos'
import Inicio from './components/Inicio';
import DatosRelaciones from './components/DatosRelacionados';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/datos_atributos">Datos Atributos</Link>
          </li>
          <li>
            <Link to="/datos_relacionados">Datos Relacionados</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/datos_atributos/:folio">
            <DatosAtributos />
          </Route>
          <Router>
            <DatosRelaciones path="/datos_relacionados/:folio"/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}