import BaseModel from '../BaseModel'

class Cliente extends BaseModel {
    constructor(data){
        super(data)

        this.categoria = this.getAttribute('categoria')
        this.logoEmpresa = this.getAttribute('logoEmpresa')
        this.nombreEmpresa = this.getAttribute('nombreEmpresa')
    }
}

export default Cliente