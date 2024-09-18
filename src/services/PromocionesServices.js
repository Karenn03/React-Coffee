import axios from "axios";

const url = 'http://localhost:8080/api/promociones';

class PromocionesServices{

    getAllPromociones(){
    return axios.get(url + "/all");
    }

    createPromociones(promociones){
        return axios.post(url + "/create" ,promociones);
    }

    updatePromociones(promocionesId){
        return axios.get(url + '/update/' + promocionesId);
    }

    getPromocionesById(promocionesId){
        return axios.get(url + '/' + promocionesId);
    }
}


export default new PromocionesServices;