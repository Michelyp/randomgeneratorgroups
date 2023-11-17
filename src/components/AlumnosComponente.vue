<template>
  <div id="Lista-Alumnos">
    <ul>
      <!-- <li v-for="alumno in alumnos">

      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name:'AlumnosComponent',
    props: ['alumnos'],
    methods: {
        Generar_Grupos(){                    
        }
    }
}
</script>

<style>
  #Lista-Alumnos {
      max-height: 50px;
      overflow: scroll;
  }
</style>