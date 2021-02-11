import BaseModel from '../BaseModel'
import Proveedor from './Proveedor'
import Unidad from './Unidad'
import Operador from './Operador'

class Bitacora extends BaseModel {
    constructor(data){
        super(data)
console.log(data)

        this.tiempoInicial = this.getAttribute('tiempoInicial').slice(11)
        this.tiempoFinal = this.getAttribute('tiempoFinal').slice(11)
        this.fechaInicial = this.getAttribute('tiempoInicial').slice(0,-9)
        this.fechaFinal = this.getAttribute('tiempoFinal').slice(0,-9)
    }

    /** @returns {Proveedor} */
    getProveedor(){
        if(!this.proveedor){
            this.proveedor = this.getRelationData('proveedor') ? new Proveedor(this.getRelationData('proveedor')) : null
        }
        return this.proveedor
    }

    /** @returns {Operador} */
    getOperador(){
        if(!this.operador){
            this.operador = this.getRelationData('operador') ? new Operador(this.getRelationData('operador')) : null
        }
        return this.operador
    }

    /** @returns {Unidad} */
    getUnidad(){
        if(!this.unidad){
            this.unidad = this.getRelationData('unidad') ? new Unidad(this.getRelationData('unidad')) : null
        }
        return this.unidad
    }
}

export default Bitacora
