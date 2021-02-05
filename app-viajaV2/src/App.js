import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Informacion from './components/Informacion'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="container">
        <div class="ui menu">
            <Link to="/"><a className="item">Inicio</a></Link>
            <Link to="/informacion"><a className="item">Información</a></Link>
            <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Buscar servicio..."/>
                <button class="ui primary button">Buscar</button>
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
        </Switch>
      </div>
    </Router>
  );
}