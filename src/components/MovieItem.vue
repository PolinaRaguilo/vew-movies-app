<template>
  <div class="movie-item">
    <div class="movie-poster" :style="posterBG"></div>
    <div class="movie-info-wrap">
      <div class="movie-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-controls">
        <Button class="button" size="small" block @click="openInfoModal">Info</Button>
        <Button class="button" size="small" block @click="removeItem">Remove</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'MovieItem',
  components: { Button },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBG() {
      const poster =
        this.movie.Poster === 'N/A'
          ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png'
          : this.movie.Poster;
      return { 'background-image': `url(${poster})` };
    },
  },
  methods: {
    removeItem() {
      this.$emit('removeHandler', { id: this.movie.imdbID, title: this.movie.Title });
    },
    openInfoModal() {
      this.$emit('showModalInfo', this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movie-item {
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  height: 400px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movie-info-wrap {
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  opacity: 0;
  transition: all 0.2s ease-in;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-title {
  font-size: 20px;
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
}

.movie-year {
  font-size: 14px;
  color: #fff;
}

.movie-controls {
  display: flex;
  justify-content: space-between;
}

.movie-controls > button {
  width: 100%;
}

.button {
  background-color: transparent;
  color: #fff;
}
.button:hover {
  background-color: #fff;
  color: #000;
}
.button:first-child {
  margin-right: 10px;
}
</style>
