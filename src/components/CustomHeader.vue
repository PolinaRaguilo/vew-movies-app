<template>
  <header class="header">
    <div class="navbar">
      <div class="title">MovieDB</div>
      <Search placeholder="Search..." class="search-bar" v-model="searchValue" />
    </div>
  </header>
</template>

<script>
import { Search } from 'vant';
import { mapActions } from 'vuex';

export default {
  name: 'CustomHeader',
  components: { Search },
  data() {
    return { searchValue: '' };
  },
  watch: { searchValue: 'onSearchHandler' },
  methods: {
    ...mapActions({
      searchMovie: 'movies/searchMovie',
      fetchMovies: 'movies/fetchMovies',
      toggleIsSearch: 'movies/toggleIsSearch',
    }),
    clearSearch() {
      this.searchValue = '';
    },
    onSearchHandler(value) {
      if (value) {
        this.searchMovie(value);
        this.toggleIsSearch(true);
      } else {
        this.fetchMovies();
        this.toggleIsSearch(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  z-index: 800;
}
.navbar {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
}
.title {
  color: #fff;
  font-size: 25px;
}
.search-bar {
  padding: 8px;
  border-radius: 5px;
  width: 300px;
}
.search-bar >>> .van-search__content {
  padding-left: 0;
}

.search-bar >>> .van-search__content > .van-field {
  padding-right: 0;
  background-color: #fff;
}
</style>
