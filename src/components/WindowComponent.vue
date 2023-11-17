<template>
  <div class="d-flex">
    <div class="col-4">
      <v-col cols="auto">
        <v-card width="200" height="200" class="overflow-auto">
          <v-card-text>
            <AlumnosComponente :alumnos="this.alumnos"></AlumnosComponente>
          </v-card-text>
        </v-card>
      </v-col>
      <button class="btn btn-info" @click=" Btn_GenerarGrupos()">Generar grupos</button>
    </div>
    <div class="col-8 float-end" v-if="alumnos.length != 0">
      <div v-for="(i, grupo) in grupos" :key="grupo">
        <GrupoComponente
          :alumno_elegido="alumno_elegido"
          :index="i"
        ></GrupoComponente>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceAlumno from "@/services/ServiceAlumno";
import AlumnosComponente from "./AlumnosComponente.vue";
import GrupoComponente from "./GrupoComponente.vue";

const service = new ServiceAlumno();
export default {
  components: {
    AlumnosComponente,
    GrupoComponente,
  },
  data() {
    return {
      alumnos: [],
      grupos: 0,
      statusImpar: false,
      alumno_elegido: NaN,
    };
  },
  mounted() {
    this.Load_Alumnos();
  },
  methods: {
    Load_Alumnos() {
      this.alumnos = service.getAlumnos().then((response) => {
        this.alumnos = response;
        this.Create_Grupos();
      });
    },
    Create_Grupos() {
      if (this.alumnos.length % 3 == 0) {
        this.grupos = parseInt(this.alumnos.length / 3);
        this.statusImpar = false;
      } else {
        this.grupos = parseInt(this.alumnos.length / 3);
        this.statusImpar = true;
      }
    },

           Btn_GenerarGrupos(){
          while(this.alumnos.length > 0){
            this.alumnos.splice(this.NumeroRandom(), 1)
          }
        },

        NumeroRandom(){
          var numero = this.alumnos.length;
          while(this.alumnos.length < numero){
            numero = parseInt(Math.random()*1000);            
          }
          return numero;
        } 
  },
};
</script>

<style>
</style>

/* Generar PDF
import html2pdf from "html2pdf.js";
export default {
methods:{
  var element = document.getElementById("element-to-pdf");
  html2pdf(element);
}

 */