import axios from "axios";

const url = 'http://localhost:8080/api/tiposProducto';

class TipoProductoServices{

    getAllTiposProducto(){
    return axios.get(url + "/all");
    }

    createTipoProducto(tipoProducto){
        return axios.post(url + "/create" ,tipoProducto);
    }

    updateTipoProducto(tipoProductoId){
        return axios.get(url + '/update/' + tipoProductoId);
    }

    getTipoProductoById(tipoProductoId){
        return axios.get(url + '/' + tipoProductoId);
    }
}


export default new TipoProductoServices;