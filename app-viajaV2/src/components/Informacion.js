import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Especial from '../modelos/Especial';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

class Informacion extends Component  {
        constructor(props) {
            super(props);
            this.state = {
                especial: null,
            }
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

        if(!especial) {
          return( 
            <div>
              <h2>Inicio</h2>
            </div>
          )
        } else {
          return (
              <div>
                <h2>Información</h2>
                <br />
                <div>
                  <h3>Datos del Servicio</h3>
                  <p>Id: {especial.id}</p>
                  <p>Tipo: {especial.tipo}</p>
                  <p>Nombre: {especial.contactoNombre}</p>
                  <p>Email: {especial.contactoEmail}</p>
                  <p>Celular: {especial.contactoNumeroCelular}</p>
                  <p>Teléfono: {especial.contactoNumeroTelefono}</p>
                  <p>Origen: {especial.lugarOrigen}</p>
                  <p>Dirección origen: {especial.direccionOrigen}</p>
                  <p>Destino: {especial.lugarDestino}</p>
                  <p>Dirección destino: {especial.direccionDestino}</p>
                </div>
                <br />
                <InformacionUsuario usuario={especial.getUsuario()}/>
                <br />
                { especial.getCliente() &&
                  <InformacionCliente cliente={especial.getCliente()}/>
                }
                <br />
                { especial.getProveedor() &&
                  <InformacionProveedor proveedor={especial.getProveedor()}/>
                }
              </div>
            );
          }
      }
}

function InformacionCliente({cliente}) {
  /** @type {Cliente} */
  const infoCliente = cliente;

  return (
    <div>
      <h3>Datos del Cliente</h3>
      <p>Empresa: {infoCliente.nombreEmpresa}</p>
      <p>Logo: {infoCliente.logoEmpresa}</p>
      <p>Categoría: {infoCliente.categoria.etiqueta}</p>
    </div>
  )
}

function InformacionUsuario({ usuario }) {
  /** @type {Usuario} */
  const infoUsuario = usuario;

    return (
      <div>
        <h3>Datos del Usuario</h3>
        <p>Nombre: {infoUsuario.nombre}</p>
        <p>Email: {infoUsuario.email}</p>
        <p>Teléfono: {infoUsuario.numeroTelefono}</p>
        <p>Fotografía: {infoUsuario.fotografia}</p>
      </div>
    )
}

function  InformacionProveedor({ proveedor }) {
  /** @type {Proveedor} */
  const infoProveedor = proveedor;

    return (
      <div>
        <h3>Datos del Proveedor</h3>
        <p>Nombre: {infoProveedor.nombre}</p>
        <p>Email: {infoProveedor.email}</p>
        <p>Teléfono: {infoProveedor.numeroTelefono}</p>
        <p>Contacto: {infoProveedor.tipoContacto}</p>
      </div>
    )
}

export default withRouter(Informacion)