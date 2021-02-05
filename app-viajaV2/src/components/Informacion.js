import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Especial from '../modelos/Especial';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

class Informacion extends Component  {
        constructor(props) {
            super(props);
            this.state ={
                id: -1,
            }
          }

        componentDidMount(){
          let {folio} = this.props.match.params;
          axios.get(`http://tapi.sumaenlinea.mx/especiales/${folio}`)
          .then((response) => {
            const especial = new Especial(response.data.data);

            console.log(especial)
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
              direccionDestino: especial.direccionOrigen,
              clienteCategoria: especial.cliente.attributes.categoria.etiqueta,
              clienteLogo: especial.cliente.attributes.logoEmpresa,
              clienteNombre: especial.cliente.attributes.nombreEmpresa,
              usuario: especial.usuario.attributes,
              usuarioNombre: especial.usuario.attributes.nombre,
              usuarioEmail: especial.usuario.attributes.email,
              usuarioTelefono: especial.usuario.attributes.numeroTelefono,
              usuarioFoto: especial.usuario.attributes.fotografia,
          })

          })
        }

      render(){
          return (
              <div>
                <br />
                <br />
                <h2>Información</h2>
                <br />
                <div>
                  <h3>Datos del Servicio</h3>
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
                <br />
                <div>
                  <h3>Datos del Usuario</h3>
                  <p>{this.state.usuarioNombre}</p>
                  <p>{this.state.usuarioEmail}</p>
                  <p>{this.state.usuarioTelefono}</p>
                  <p>{this.state.usuarioFoto}</p>
                </div>
                <br />
                <div>
                  <h3>Datos del Cliente</h3>
                  <p>{this.state.clienteNombre}</p>
                  <p>{this.state.clienteCategoria}</p>
                  <p>{this.state.clienteLogo}</p>
                </div>

                
              </div>
            );
      }
}

export default withRouter(Informacion)