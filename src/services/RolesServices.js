import axios from "axios";

const url = 'http://localhost:8080/api/roles';

class RolesServices{

    getAllRoles(){
    return axios.get(url + "/all");
    }

    createRoles(roles){
        return axios.post(url + "/create" ,roles);
    }

    updateRoles(rolesId){
        return axios.get(url + '/update/' + rolesId);
    }

    getRolesById(rolesId){
        return axios.get(url + '/' + rolesId);
    }
}


export default new RolesServices;