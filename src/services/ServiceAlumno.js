import Global from './../Global';
import axios from 'axios';

export default class ServiceAlumno {
    getAlumnos() {
        return new Promise(function(resolve){
            var request = "api/alumnos";
            var url = Global.urlApiAlumnos + request;
            var alumnos = [];
            axios.get(url).then(response => {
                alumnos = response.data;
                console.log(alumnos)
                resolve(alumnos);
            })
        })
    }
}