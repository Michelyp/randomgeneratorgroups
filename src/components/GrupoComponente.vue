<template>
<v-card
    class="mx-auto my-8"
    max-width="344"
    elevation="16"
  >
    <v-card-item>
      <v-card-title>
        Grupo {{index}}
      </v-card-title>
    </v-card-item>
    <v-card-text v-for="alumno in alumnos" :key="alumno">
      {{alumno.nombre}} {{alumno.apellidos}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "GrupoComponent",
  props:["alumno_elegido","index"],
  data() {
    return {
      alumnos : []
    };
  },
  mounted() {
    console.log("Montado");    
  },
  updated(){
    this.alumnos.push(this.alumno_elegido);
  }
};
</script>

<style>
</style>