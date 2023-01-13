<template>
<p>d</p>
|<Button type="success">Primary</Button>
</template>

<script>
import { Button } from 'vant';
import { mapActions } from 'vuex';

export default {
  components: {
    Button,
  },
  name: 'App',
  methods: {
    ...mapActions({
      fetchMovies: 'movies/fetchMovies',
    }),
  },
  mounted() {
    this.fetchMovies();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
