import BaseModel from '../BaseModel'

class Unidad extends BaseModel {
    constructor(data){
        super(data)

        this.numeroEconomico = this.getAttribute('numeroEconomico')
        this.descripcion = this.getAttribute('descripcion')
        this.fotografia = this.getAttribute('fotografia')
        this.gps = this.getAttribute('gps')
        this.pasajeros = this.getAttribute('pasajeros')
        this.placasFederales = this.getAttribute('placasFederales')
        this.tipo = this.getAttribute('tipo')
        
    }
}

export default Unidad