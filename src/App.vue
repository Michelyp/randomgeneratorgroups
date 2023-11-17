<template>
  <v-app>
    <v-main>
      <WindowComponent/>
      <audio-player></audio-player>
    </v-main>
  </v-app>
</template>

<script>
import WindowComponent from './components/WindowComponent.vue'
import AudioPlayer from './components/AudioPlayerComponent.vue'
export default {
  name: 'App',

  components: {
    WindowComponent,
    AudioPlayer
  },

  data: () => ({
    //
  }),
}
</script>
