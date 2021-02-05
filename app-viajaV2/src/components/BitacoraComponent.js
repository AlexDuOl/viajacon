import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Bitacora from '../modelos/Bitacora/Bitacora';
import Proveedor from '../modelos/Bitacora/Proveedor';
import Unidad from '../modelos/Bitacora/Unidad';
import Operador from '../modelos/Bitacora/Operador';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'


class BitacoraComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            bitacora: null
        }
    }

    componentDidMount(){
        let folio = 44468
        axios.get(`http://tapi.sumaenlinea.mx/bitacoras?id_servicio_especial=${folio}`)
        .then((response) => {
            this.setState({
                bitacora: new Bitacora(response.data[0].data)
            })
        })
    }

    render(){
        //console.log(bitacora);
        /** 
         * @type {Bitacora}
         */
        const bitacora = this.state.bitacora

        if(!bitacora) {
            return (
                <div>
                    <h2>Bitacora</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Bitacora</h2>
                    <br />
                    <div>
                      <p>Modalidad: {bitacora.modalidad}</p>
                      <p>Fecha: {bitacora.fecha}</p>
                      <p>Tiempo inicial: {bitacora.tiempoInicial}</p>
                      <p>Tiempo final: {bitacora.tiempoFinal}</p>
                      <p>Status del servicio: {bitacora.statusServicio}</p>
                      <p>Id de Servicio Especial: {bitacora.idServicioEspecial}</p>
                    </div>
                    <br />

                    <br />
                </div>
            )
        }
    }
}

function BitacoraProveedor({ proveedor }) {
    /** @type {Proveedor} */
    const infoProveedor = proveedor

    return (
        <div>
          <h3>Datos del Proveedor</h3>
          <p>Nombre: {infoCliente.nombre}</p>
          <p>Email: {infoCliente.email}</p>
          <p>Número de teléfono: {infoCliente.numeroTelefono}</p>
          <p>Contacto: {infoCliente.tipoContacto}</p>
        </div>
    )
}

function BitacoraUnidad({ unidad }) {
    /** @type {Unidad} */
    const infoUnidad = unidad

    return (
        <div>
          <h3>Datos del Unidad</h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
    )
}

function BitacoraOperador({ operador }) {
    /** @type {Operador} */
    const infoOperador = operador

    return (
        <div>
          <h3>Datos del Operador</h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
    )
}

export default withRouter(BitacoraComponent)