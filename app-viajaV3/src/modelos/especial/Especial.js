import BaseModel from '../BaseModel';
import Cliente from './Cliente';
import Usuario from './Usuario';
import Proveedor from './Proveedor';

class Especial extends BaseModel {
    constructor(data) {
        super(data);

        this.tipo = this.getAttribute('tipo')
        this.contactoNombre = this.getAttribute('contactoNombre')
        this.contactoEmail = this.getAttribute('contactoEmail').toLowerCase()
        this.contactoNumeroCelular = this.getAttribute('contactoNumeroCelular')
        this.contactoNumeroTelefono = this.getAttribute('contactoNumeroTelefono')
        this.contratoWeb = this.getAttribute('contratoWeb')
        this.lugarOrigen = this.getAttribute('lugarOrigen').toLowerCase()
        this.direccionOrigen = this.getAttribute('direccionOrigen').toLowerCase()
        this.lugarDestino = this.getAttribute('lugarDestino').toLowerCase()
        this.direccionDestino = this.getAttribute('direccionDestino').toLowerCase()
        this.tiempoInicial = this.getAttribute('tiempoInicial').slice(11)
        this.tiempoFinal = this.getAttribute('tiempoFinal').slice(11)
        this.fechaInicial = this.getAttribute('tiempoInicial').slice(0,-9)
        this.fechaFinal = this.getAttribute('tiempoFinal').slice(0,-9)
      }

      
    /** @returns {Cliente} */
    getCliente(){
      if(!this.cliente){
        //Generar una instancia de la clase Cliente
        this.cliente = this.getRelationData('cliente') ? new Cliente(this.getRelationData('cliente')) : null
      }
      return this.cliente
    }

    /** @returns {Usuario} */
    getUsuario(){
      //Generar una instancia de la clase Usuario
      if(!this.usuario){
        this.usuario = this.getRelationData('usuario') ? new Usuario(this.getRelationData('usuario')) : null
      }
      return this.usuario
    } 

    /** @returns {Proveedor} */
    getProveedor(){
      if(!this.proveedor){
        this.proveedor = this.getRelationData('proveedor') ? new Proveedor(this.getRelationData('proveedor')) : null
      }
      return this.proveedor
    }
}

export default Especial