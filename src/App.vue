<template>
  <MoviesList :list="moviesList"></MoviesList>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/MoviesList.vue';

export default {
  components: {
    MoviesList,
  },
  name: 'App',
  methods: {
    ...mapActions({
      fetchMovies: 'movies/fetchMovies',
    }),
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
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
