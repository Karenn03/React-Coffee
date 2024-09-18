import axios from "axios";

const url = 'http://localhost:8080/api/productos';

class ProductosServices{

    getAllProductos(){
    return axios.get(url + "/all");
    }

    createProducto(productos){
        return axios.post(url + "/create" ,productos);
    }

    updateProducto(productosId){
        return axios.get(url + '/update/' + productosId);
    }

    getProductoById(productosId){
        return axios.get(url + '/' + productosId);
    }
}


export default new ProductosServices;