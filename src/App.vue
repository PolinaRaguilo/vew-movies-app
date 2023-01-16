<template>
  <PosterBg :posterUrl="posterBg"/>
  <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/MoviesList.vue';
import PosterBg from './components/PosterBg.vue';

export default {
  components: {
    MoviesList, PosterBg,
  },
  name: 'App',
  data() {
    return {
      posterBg: '',
    };
  },
  methods: {
    ...mapActions({
      fetchMovies: 'movies/fetchMovies',
    }),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },
  computed: {
    ...mapGetters({
      moviesList: 'movies/moviesList',
    }),
  },
  mounted() {

  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
