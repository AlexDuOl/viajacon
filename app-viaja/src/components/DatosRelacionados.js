import React, { Component } from 'react';
import {withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Especial from '../modelos/Especial';

class DatosRelacionados extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <br />
                <br />
                <h2>Datos Relacionados</h2>
                <br />
            </div>
        )
    }
}

export default withRouter(DatosRelacionados)