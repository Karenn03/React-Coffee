import axios from "axios";

const url = 'http://localhost:8080/api/productos';

class ProductosServices{

    getAllProductos(){
    return axios.get(url + "/all");
    }

    createProducto(productos){
        return axios.post(url + "/create" ,productos);
    }

    updateProducto(productosId, productos){
        return axios.get(url + '/update/' + productosId, productos);
    }

    getProductoById(productosId){
        return axios.get(url + '/' + productosId);
    }

    deletePromocion(productosId){
        return axios.delete(url + "/delete/" + productosId)
    }
}


export default new ProductosServices;