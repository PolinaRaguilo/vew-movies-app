<template>
  <CustomLoader />
  <CustomAlert />
  <PosterBg :posterUrl="posterBg" />
  <CustomHeader />
  <MoviesList :list="moviesList" @changePoster="onChangePoster"></MoviesList>
  <MoviesPagination
    :current-page="currentPage"
    :per-page="moviesPerPage"
    :total="moviesTotal"
    @onChangePage="onChangePage"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CustomLoader from '@/components/CustomLoader.vue';
import CustomHeader from '@/components/CustomHeader.vue';
import MoviesList from '@/components/MoviesList.vue';
import PosterBg from '@/components/PosterBg.vue';
import MoviesPagination from '@/components/MoviesPagination.vue';
import CustomAlert from '@/components/CustomAlert.vue';

export default {
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    CustomLoader,
    CustomHeader,
    CustomAlert,
  },
  name: 'App',
  data() {
    return { posterBg: '' };
  },
  methods: {
    ...mapActions({
      fetchMovies: 'movies/fetchMovies',
      changePage: 'movies/changePage',
    }),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onChangePage(page) {
      this.$router.push({ query: { page } });
    },
    onPageQueryChange(query) {
      this.changePage(+query.page);
    },
  },
  computed: {
    ...mapGetters({
      moviesList: 'movies/moviesList',
      currentPage: 'movies/currentPage',
      moviesPerPage: 'movies/moviesPerPage',
      moviesTotal: 'movies/moviesTotal',
    }),
  },
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      immidiate: true,
      deep: true,
    },
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
