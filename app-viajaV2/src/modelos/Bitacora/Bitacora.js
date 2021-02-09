import BaseModel from '../BaseModel'
import Proveedor from './Proveedor'
import Unidad from './Unidad'
import Operador from './Operador'

class Bitacora extends BaseModel {
    constructor(data){
        super(data)

        this.modalidad = this.getAttribute('modalidad')
        this.fecha = this.getAttribute('fecha')
        this.tiempoInicial = this.getAttribute('tiempoInicial')
        this.tiempoFinal = this.getAttribute('tiempoFinal')
        this.statusServicio = this.getAttribute('statuServicio')
        this.idServicioEspecial = this.getAttribute('idServicioEspecial')
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
