<template>
  <Dialog />
  <div class="list-wrapper">
    <h3 class="list-title">IMDB Top 250</h3>
    <Row justify="center" align="center">
      <template v-if="isExist">
        <Col span="4" offset="1" v-for="movie in list" :key="movie.imdbID">
          <MovieItem
            :movie="movie"
            @focus="onMouseOverMovie(movie.Poster)"
            @mouseover="onMouseOverMovie(movie.Poster)"
            @removeHandler="onRemove"
          />
        </Col>
      </template>
      <template v-else>No films</template>
    </Row>
  </div>
</template>

<script>
import { Col, Row, Dialog, showConfirmDialog } from 'vant';
import { mapActions } from 'vuex';
import MovieItem from './MovieItem.vue';

export default {
  components: {
    Col,
    Row,
    MovieItem,
    Dialog,
  },
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return !!Object.keys(this.list).length;
    },
  },
  methods: {
    ...mapActions({ removeMovie: 'movies/removeMovie' }),
    onMouseOverMovie(poster) {
      this.$emit('changePoster', poster);
    },
    async onRemove({ id, title }) {
      // eslint-disable-next-line no-unused-vars
      const isConfirmed = await showConfirmDialog({
        title: 'Are you sure ?',
        message: `Click confirm if you wan to remove ${title}.`,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm',
      })
        .then(() => {
          this.removeMovie(id);
        })
        .catch(() => {
          // on cancel
        });
      console.log(isConfirmed);
    },
  },
};
</script>
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  margin-top: 0;
  color: #fff;
  text-align: center;
  font-weight: 400;
}

.list-wrapper {
  padding: 0px 70px;
}
</style>
