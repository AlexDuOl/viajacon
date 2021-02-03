import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Especial from './modelos/Especial';



class Dashboard extends Component  {
        constructor(props) {
            super(props);
            this.state ={
                id: -1
            }
          }

        componentDidMount(){
            let {folio} = this.props.match.params;
            axios.get(`http://tapi.sumaenlinea.mx/especiales/${folio}`)
            .then((response) => {
                const especial = new Especial(response.data.data);
                
                this.setState({
                    id: especial.id,
                    tipo: especial.tipo,
                    contacto: especial.contacto,
                    email: especial.email,
                    celular: especial.celular,
                    telefono: especial.telefono,
                    origen: especial.origen,
                    direccionOrigen: especial.direccionOrigen,
                    destino: especial.destino,
                    direccionDestino: especial.direccionOrigen
                })
            })
        }

      render(){
          return (
              <div>
                <h2>Dashboard</h2>
                <p>{this.state.id}</p>
                <p>{this.state.tipo}</p>
                <p>{this.state.contacto}</p>
                <p>{this.state.email}</p>
                <p>{this.state.celular}</p>
                <p>{this.state.telefono}</p>
                <p>{this.state.origen}</p>
                <p>{this.state.direccionOrigen}</p>
                <p>{this.state.destino}</p>
                <p>{this.state.direccionDestino}</p>
              </div>
            );
      }
}

export default withRouter(Dashboard)


    
  
    
    
