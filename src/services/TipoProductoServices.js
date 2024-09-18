import axios from "axios";

const url = 'http://localhost:8080/api/tiposProducto';

class TipoProductoServices{

    getAllRoles(){
    return axios.get(url + "/all");
    }

    createRoles(tipoProducto){
        return axios.post(url + "/create" ,tipoProducto);
    }

    updateRoles(tipoProductoId){
        return axios.get(url + '/update/' + tipoProductoId);
    }

    getRolesById(tipoProductoId){
        return axios.get(url + '/' + tipoProductoId);
    }
}


export default new TipoProductoServices;