import axios from "axios";

const url = 'http://localhost:8080/api/roles';

class RolesServices{

    getAllRoles(){
    return axios.get(url + "/all");
    }

    createRoles(rol){
        return axios.post(url + "/create" ,rol);
    }

    updateRoles(rolesId, rol){
        return axios.put(url + '/update/' + rolesId, rol);
    }

    getRolesById(rolesId){
        return axios.get(url + '/' + rolesId);
    }

    deleteRol(rolesId){
        return axios.delete(url + "/delete/" + rolesId)
    }
}


export default new RolesServices;