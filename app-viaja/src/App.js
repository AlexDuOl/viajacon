import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Informacion from './components/Informacion'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/informacion">Información</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/informacion/:folio">
            <Informacion />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}