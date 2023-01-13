<template>
  <div class="list-wrapper">
    <h3 class="list-title">
      IMDB Top 250
    </h3>
    <Row justify="center" align="center">
      <template v-if="isExist">
        <Col span="4" offset="1" v-for="movie in list" :key="movie.imdbID">
          <MovieItem :movie="movie"/>
        </Col>
      </template>
      <template v-else>No films</template>
    </Row>
  </div>
</template>

<script>
import { Col, Row } from 'vant';
import MovieItem from './MovieItem.vue';

export default {
  components: {
    Col, Row, MovieItem,
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
};
</script>
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}

.list-wrapper{
  padding: 0px 70px;
}
</style>
