import axios from "axios";

const url = 'http://localhost:8080/api/mesas';

class MesasServices{

    getAllMesas(){
    return axios.get(url + "/all");
    }

    createMesa(mesa){
        return axios.post(url + "/create" ,mesa);
    }

    updateMesa(mesaId){
        return axios.get(url + '/update/' + mesaId);
    }

    getMesaById(mesaId){
        return axios.get(url + '/' + mesaId);
    }
}


export default new MesasServices;