import BaseModel from '../BaseModel'

class Usuario extends BaseModel {
    constructor(data){
        super(data)

        this.nombre = this.getAttribute('nombre')
        this.email = this.getAttribute('email')
        this.numeroTelefono = this.getAttribute('numeroTelefono')
        this.fotografia = this.getAttribute('fotografia')
    }
}

export default Usuario