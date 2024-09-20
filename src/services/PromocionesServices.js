import axios from "axios";

const url = 'http://localhost:8080/api/promociones';

class PromocionesServices{

    getAllPromociones(){
    return axios.get(url + "/all");
    }

    createPromociones(promociones){
        return axios.post(url + "/create" ,promociones);
    }

    updatePromociones(promocionesId, promociones) {
        return axios.put(url + '/update/' + promocionesId, promociones);
    }
    
    getPromocionesById(promocionesId){
        return axios.get(url + '/' + promocionesId);
    }

    deletePromocion(promocionesId){
        return axios.delete(url + "/delete/" + promocionesId)
    }
}

export default new PromocionesServices;