<template>
  <v-app>
    <v-main>
      <WindowComponent/>
    </v-main>
  </v-app>
</template>

<script>
import WindowComponent from './components/WindowComponent.vue'

export default {
  name: 'App',

  components: {
    WindowComponent,
  },

  data: () => ({
    //
  }),
}
</script>
