import BaseModel from './baseModels';

class Especial extends BaseModel {
    constructor(data) {
        super(data);

        this.tipo = this.getAttribute('tipo')
        this.contacto = this.getAttribute('contactoNombre')
        this.email = this.getAttribute('contactoEmail')
        this.celular = this.getAttribute('contactoNumeroCelular')
        this.telefono = this.getAttribute('contactoNumerotelefono')
        this.origen = this.getAttribute('lugarOrigen')
        this.direccionOrigen = this.getAttribute('direccionOrigen')
        this.destino = this.getAttribute('lugarDestino')
        this.direccionDestino = this.getAttribute('direccionDestino')
      }
}

export default Especial