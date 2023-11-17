<template>
<div class="d-flex">
  <div class="col-4">
    <AlumnosComponente :alumnos="this.alumnos"></AlumnosComponente>
    <button class="btn btn-info">Generar grupos</button>
  </div>
  
  <div class="col-8 float-end" v-if="alumnos.length != 0">
    <div v-for="(i,grupo) in grupos" :key="grupo">
    <GrupoComponente :alumnos="this.alumnos" :index="i" ></GrupoComponente>
   </div>
  </div>
</div>
   

   
   
</template>

<script>
    import ServiceAlumno from '@/services/ServiceAlumno';
    import AlumnosComponente from './AlumnosComponente.vue';
    import GrupoComponente from './GrupoComponente.vue';

const service = new ServiceAlumno();
export default {
    components:{
        AlumnosComponente,
        GrupoComponente
    },
    data() {
        return {
            alumnos : [],
            grupos : 0,
            statusImpar:false
        }
    },
    mounted(){
        this.Load_Alumnos();
    },
    methods: {
        Load_Alumnos(){
            this.alumnos = service.getAlumnos().then(response=>{
                this.alumnos = response
                this.Create_Grupos();
            })      
        },
        Create_Grupos(){
          
          if(this.alumnos.length%3 == 0){
            this.grupos = parseInt(this.alumnos.length / 3);
            this.statusImpar = false
          }else{
            this.grupos = parseInt(this.alumnos.length / 3);
            this.statusImpar = true
          }
          
        }
    },
}
</script>

<style>

</style>