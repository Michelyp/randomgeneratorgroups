import Global from './../Global';
import axios from 'axios';

export default class ServiceAlumno {
    getCoches() {
        return new Promise(function(resolve){
            var request = "api/alumnos";
            var url = Global.urlApiAlumnos + request;
            var alumnos = [];
            axios.get(url).then(response => {
                alumnos = response.data;
                resolve(alumnos);
            })
        })
    }
}