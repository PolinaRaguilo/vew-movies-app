<template>
  <div class="bg-wrapper" :style="posterStyles"></div>
</template>
<script>
export default {
  name: 'PosterBg',
  data() {
    return { defaultBg: 'linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)' };
  },
  props: {
    posterUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    posterBg() {
      return this.posterUrl ? `url(${this.posterUrl})` : this.defaultBg;
    },
    posterStyles() {
      return { 'background-image': this.posterBg };
    },
  },
};
</script>

<style scoped>
.bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}

.bg-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;
  background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
}
</style>
