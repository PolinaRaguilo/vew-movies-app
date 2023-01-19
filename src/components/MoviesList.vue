<template>
  <Dialog />
  <Dialog
    v-model:show="modalInfo"
    confirmButtonText="Close"
    width="50%"
    showConfirmButton="false"
    class="info-modal"
  >
    <MovieInfoContent :selectedMovie="selectedMovieInfo" />
  </Dialog>
  <div class="list-wrapper">
    <h3 class="list-title">{{ listTitle }}</h3>
    <Row justify="center" align="center">
      <template v-if="isExist">
        <Col span="4" offset="1" v-for="movie in list" :key="movie.imdbID">
          <MovieItem
            :movie="movie"
            @focus="onMouseOverMovie(movie.Poster)"
            @mouseover="onMouseOverMovie(movie.Poster)"
            @removeHandler="onRemove"
            @showModalInfo="infoModalHandler"
          />
        </Col>
      </template>
      <template v-else>No films</template>
    </Row>
  </div>
</template>

<script>
import { Col, Row, Dialog, showConfirmDialog } from 'vant';
import { mapActions, mapGetters } from 'vuex';
import MovieInfoContent from './MovieInfoContent.vue';
import MovieItem from './MovieItem.vue';

export default {
  components: {
    Col,
    Row,
    MovieItem,
    Dialog,
    MovieInfoContent,
  },
  data() {
    return { modalInfo: false, selectedId: '' };
  },
  name: 'MoviesList',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({ isSearch: 'movies/isSearch' }),
    isExist() {
      return !!Object.keys(this.list).length;
    },
    listTitle() {
      return this.isSearch ? 'Search result' : 'IMDB Top 250';
    },
    selectedMovieInfo() {
      return this.selectedId ? this.list[this.selectedId] : null;
    },
  },
  methods: {
    ...mapActions(['showNotify']),
    ...mapActions({ removeMovie: 'movies/removeMovie' }),
    onMouseOverMovie(poster) {
      this.$emit('changePoster', poster);
    },
    async onRemove({ id, title }) {
      await showConfirmDialog({
        title: 'Are you sure ?',
        message: `Click confirm if you wan to remove ${title}.`,
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm',
        className: 'modal-confirm',
        width: 450,
        confirmButtonColor: '#a436dd',
      }).then(() => {
        this.removeMovie(id);
        this.showNotify({
          variant: 'success',
          msg: 'You have successfully deleted movie!',
          duration: 3000,
        });
      });
    },
    infoModalHandler(id) {
      this.modalInfo = true;
      this.selectedId = id;
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

<style>
.van-dialog.info-modal {
  overflow-y: auto;
  max-height: 90vh;
}
</style>
