import axios from "axios";

const url = 'http://localhost:8080/api/personas';

class PersonasServices{

    PersonasServices(){
    return axios.get(url + "/all");
    }

    createPersona(personas){
        return axios.post(url + "/create" ,personas);
    }

    updatePersona(personasId){
        return axios.get(url + '/update/' + personasId);
    }

    getPersonaById(personasId){
        return axios.get(url + '/' + personasId);
    }
}


export default new PersonasServices;