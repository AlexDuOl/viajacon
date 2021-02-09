import React, { Component } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Bitacora from '../modelos/bitacora/Bitacora';
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
                <div className="section-container">
                  
                  </div>

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
                    <BitacoraProveedor proveedor={bitacora.getProveedor()}/>
                    <br />
                    { bitacora.getUnidad() &&
                    <BitacoraUnidad unidad={bitacora.getUnidad()}/>
                    }
                    <br />
                    { bitacora.getOperador() &&
                    <BitacoraOperador operador={bitacora.getOperador()}/>
                    }
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
          <p>Nombre: {infoProveedor.nombre}</p>
          <p>Email: {infoProveedor.email}</p>
          <p>Número de teléfono: {infoProveedor.numeroTelefono}</p>
          <p>Contacto: {infoProveedor.tipoContacto}</p>
        </div>
    )
}

function BitacoraUnidad({ unidad }) {
    /** @type {Unidad} */
    const infoUnidad = unidad

    return (
        <div>
          <h3>Datos del Unidad</h3>
          <p>Id: {infoUnidad.numeroEconomico}</p>
          <p>Tipo: {infoUnidad.tipo}</p>
          <p>Fotografía: {infoUnidad.fotografia}</p>
          <p>GPS: {infoUnidad.gps}</p>
          <p>Pasajeros: {infoUnidad.pasajeros}</p>
          <p>Placas: {infoUnidad.placasFederales}</p>
        </div>
    )
}

function BitacoraOperador({ operador }) {
    /** @type {Operador} */
    const infoOperador = operador

    return (
        <div>
          <h3>Datos del Operador</h3>
          <p>Nombre:{infoOperador.nombre} </p>
          <p>Email: {infoOperador.email}</p>
          <p>Teléfono: {infoOperador.numeroTelefono}</p>
          <p>Fotografía: {infoOperador.fotografia}</p>
        </div>
    )
}

export default withRouter(BitacoraComponent)