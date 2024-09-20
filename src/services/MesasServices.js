import axios from "axios";

const url = 'http://localhost:8080/api/mesas';

class MesasServices{

    getAllMesas(){
    return axios.get(url + "/all");
    }

    createMesa(mesa){
        return axios.post(url + "/create" ,mesa);
    }

    updateMesa(mesaId, mesa){
        return axios.get(url + '/update/' + mesaId, mesa);
    }

    getMesaById(mesaId){
        return axios.get(url + '/' + mesaId);
    }

    deleteMesa(mesaId){
        return axios.delete(url + "/delete/" + mesaId)
    }
}


export default new MesasServices;