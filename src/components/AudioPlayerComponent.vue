<template>
  <div>
    <audio ref="audio" :src="audioSource"></audio>
    <button @click="togglePlayback">{{ isPlaying ? 'Pausar' : 'Reproducir' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      audioSource: "champion.mp3", 
    };
  },
  methods: {
    togglePlayback() {
      const audio = this.$refs.audio;

      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>

<style scoped>
</style>