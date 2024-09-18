import axios from "axios";

const url = 'http://localhost:8080/api/productos';

class ProductosServices{

    getAllPromociones(){
    return axios.get(url + "/all");
    }

    createPromociones(productos){
        return axios.post(url + "/create" ,productos);
    }

    updatePromociones(productosId){
        return axios.get(url + '/update/' + productosId);
    }

    getPromocionesById(productosId){
        return axios.get(url + '/' + productosId);
    }
}


export default new ProductosServices;