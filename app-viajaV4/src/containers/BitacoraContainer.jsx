import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Bitacora from '../modelos/bitacora/Bitacora'
import BitacoraComponent from '../components/Bitacora'
//import { Container, Card, Image, Header, Divider, Icon } from 'semantic-ui-react'

class BitacoraContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bitacora: null,
        }
    }

    componentDidMount(){
        //let {folio} = this.props.match.params;
        let folio = 44468;
        axios.get(`http://tapi.sumaenlinea.mx/bitacoras?id_servicio_especial=${folio}`)
        .then(response =>{
            this.setState({
                bitacora: new Bitacora(response.data[0].data)
            })
        }).catch(console.log)
    }

    render() {
        /** @type {Bitacora} */
        const bitacora = this.state.bitacora
        console.log(bitacora);
        
        if(!bitacora) {
            return (
                <div>
                    <h2>Bitacora</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <BitacoraComponent 
                    modalidad={bitacora.modalidad} 
                    fecha={bitacora.fecha}
                    tiempoInicial={bitacora.tiempoInicial}
                    tiempoFinal={bitacora.tiempoFinal}
                    fechaInicial={bitacora.fechaInicial}
                    fechaFinal={bitacora.fechaFinal}
                    operador={bitacora.getOperador()}
                    unidad={bitacora.getUnidad()}
                    />
                </div>
            )
        }
    }
}

export default withRouter(BitacoraContainer)