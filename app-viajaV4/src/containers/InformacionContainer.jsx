import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Especial from '../modelos/especial/Especial'
import InformacionComponent from '../components/Informacion'

class InformacionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            especial: null,
        }
    }

    componentDidMount(){
        let {folio} = this.props.match.params;
        axios.get(`http://tapi.sumaenlinea.mx/especiales/${folio}`)
        .then(response =>{
            this.setState({
                especial: new Especial(response.data.data)
            })
        }).catch(console.log)
    }
    
    render(){
        /** @type {Especial} */
        const especial = this.state.especial

        if(!especial){
            return (
                <div><h2>Inicio</h2></div>
            )
        } else {
            return (
                <InformacionComponent 
                contactoNombre={especial.contactoNombre} 
                contactoNumeroCelular={especial.contactoNumeroCelular}
                contactoNumeroTelefono={especial.contactoNumeroTelefono}
                contactoEmail={especial.contactoEmail}
                contratoWeb={especial.contratoWeb}
                usuario={especial.getUsuario()}
                />
            );
        }
    }
}

export default withRouter(InformacionContainer)