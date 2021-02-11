import BaseModel from '../BaseModel'

class Proveedor extends BaseModel {
    constructor(data){
        super(data)

        this.nombre = this.getAttribute('nombre')
        this.email = this.getAttribute('email')
        this.numeroTelefono = this.getAttribute('numeroTelefono')
        this.tipoContacto = this.getAttribute('tipoContacto')        
    }
}

export default Proveedor