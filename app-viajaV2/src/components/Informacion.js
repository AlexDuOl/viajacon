import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Especial from '../modelos/especial/Especial';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import logo from '../images/logo.png'
import avatar from '../images/avatar.jpg'
import { Icon } from 'semantic-ui-react'
class Informacion extends Component  {
        constructor(props) {
            super(props);
            this.state = {
                especial: null,      }
          }

        componentDidMount(){
          let {folio} = this.props.match.params;
          axios.get(`http://tapi.sumaenlinea.mx/especiales/${folio}`)
          .then((response) => {
            this.setState({
              especial: new Especial(response.data.data)
            })
          })
        }

      render(){
        /** @type {Especial} */
        const especial = this.state.especial
        console.log(especial);
        if(!especial) {
          return( 
            <div>
              <h2>Inicio</h2>
            </div>
          )
        } else {
          return (
              <div className="general-container">
                <div className="ui grid row">
                  <div className="row centered logo">
                    <img src={logo} className="ui small image" alt="Logo Suma"/>
                  </div>
                </div>

                <div className="section-container">
                  <div className="ui centered two column grid">
                    <div className="row centered">
                      <h2>Información del servicio</h2>
                    </div>
                    <div className="row">
                      <div className="eight wide column">
                        <h3>Cliente</h3>
                        <div className="ui tiny images">
                          <img src={avatar} className="ui small left floated image" alt="Imagen de cliente"/>
                        </div>
                        <p><span>{especial.contactoNombre}</span></p>
                        <p><span>Cel:</span> {especial.contactoNumeroCelular}</p>
                        <p><span>Tel:</span> {especial.contactoNumeroTelefono}</p>
                        <p><span>Correo:</span>  {especial.contactoEmail}</p>
                        <p><Icon className='exclamation triangle orange' /> Firme su contrato <span><a href={especial.contratoWeb}>aquí</a></span></p>
                      </div>

                      <InformacionUsuario usuario={especial.getUsuario()}/>
                    </div>
                    <div className="row">
                      <div className="eight wide column">
                        <h3><Icon className="map marker alternate orange" size='large' />Punto de partida</h3>
                        <p><span>Fecha: </span>{especial.tiempoInicial}</p>
                        <p><span>Hora: </span>{especial.tiempoInicial}</p>
                        <p><span>Lugar: </span>{especial.lugarOrigen}</p>
                        <p><span>Dirección: </span>{especial.direccionOrigen}</p>
                        <p><span>Comentarios: </span></p>
                      </div>
                      <div className="eight wide column">
                        <h3><Icon className="map marker alternate orange" size='large' />Punto de destino</h3>
                        <p><span>Fecha: </span>{especial.tiempoFinal}</p>
                        <p><span>Hora: </span>{especial.tiempoFinal}</p>
                        <p><span>Lugar: </span>{especial.lugarDestino}</p>
                        <p><span>Dirección: </span>{especial.direccionDestino}</p>
                        <p><span>Comentarios: </span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <br />
                { especial.getCliente() &&
                  <InformacionCliente cliente={especial.getCliente()}/>
                }
                <br />
                { especial.getProveedor() &&
                  <InformacionProveedor proveedor={especial.getProveedor()}/>
                } */}
                <div className="ui divider"></div>
              </div>
            );
          }
      }
}

// function InformacionCliente({cliente}) {
//   /** @type {Cliente} */
//   const infoCliente = cliente;

//   return (
//     <div>
//       <h3>Datos del Cliente</h3>
//       <p>Empresa: {infoCliente.nombreEmpresa}</p>
//       <p>Logo: {infoCliente.logoEmpresa}</p>
//       <p>Categoría: {infoCliente.categoria.etiqueta}</p>
//     </div>
//   )
// }

function InformacionUsuario({ usuario }) {
  /** @type {Usuario} */
  const infoUsuario = usuario;

    return (
      <div className="eight wide column">
        <h3>Asesor de venta</h3>
        <div className="ui tiny images">
          <img src={infoUsuario.fotografia} className="ui small left floated image" alt="Fotografía Asesor de Venta"/>
        </div>
        <p><span>{infoUsuario.nombre}</span></p>
        <p><span>Email: </span>{infoUsuario.email}</p>
        <p><span>Teléfono: </span>{infoUsuario.numeroTelefono}</p>
      </div>
    )
}

// function  InformacionProveedor({ proveedor }) {
//   /** @type {Proveedor} */
//   const infoProveedor = proveedor;

//     return (
//       <div>
//         <h3>Datos del Proveedor</h3>
//         <p>Nombre: {infoProveedor.nombre}</p>
//         <p>Email: {infoProveedor.email}</p>
//         <p>Teléfono: {infoProveedor.numeroTelefono}</p>
//         <p>Contacto: {infoProveedor.tipoContacto}</p>
//       </div>
//     )
// }

export default withRouter(Informacion)