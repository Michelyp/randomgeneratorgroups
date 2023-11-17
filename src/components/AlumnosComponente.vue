<template>
 <v-container>
    <v-row align="center" justify="center"
        v-for="(alumno, i) in alumnos"
        :key="i"
      >
      {{ alumno.nombre }} {{alumno.apellidos}}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:'AlumnosComponent',
    props: ['alumnos']
}
</script>

<style>
  #Lista-Alumnos {
      max-height: 50px;
      overflow: scroll;
  }
</style>