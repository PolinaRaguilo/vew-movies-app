<template>
  <div class="modal-title">Movie info</div>
  <div class="content-wrappper">
    <div class="flex-wrapper">
      <div>
        <img :src="posterBG" alt="poster" class="modal-img" />
      </div>
      <div class="info-wrapper">
        <p class="movie-title">{{ selectedMovie.Title }}</p>
        <div class="ratings-wrapper">
          <Rate
            void-icon="star"
            void-color="#eee"
            :size="23"
            allow-half
            readonly
            count="10"
            color="gold"
            v-model="currentRating"
          />
          <div class="ratings-value">{{ this.selectedMovie.imdbRating }}/10</div>
        </div>
        <p class="movie-plot">{{ selectedMovie.Plot }}</p>
        <div class="flex-wrapper labels-padding">
          <CustomLabel :value="selectedMovie.Year" :color="'#008000'" />
          <CustomLabel :value="selectedMovie.Runtime" :color="'#008000'" />
          <CustomLabel :value="selectedMovie.Genre" :color="'#008000'" />
          <CustomLabel :value="selectedMovie.Language" :color="'#008000'" />
        </div>
        <div>
          <InfoRow :title="'Production'" :info="selectedMovie.Production" />
          <InfoRow :title="'Country'" :info="selectedMovie.Country" />
          <InfoRow :title="'Director'" :info="selectedMovie.Director" />
          <InfoRow :title="'Writer'" :info="selectedMovie.Production" />
          <InfoRow :title="'Actors'" :info="selectedMovie.Actors" />
          <InfoRow :title="'Awards'" :info="selectedMovie.Awards" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Rate } from 'vant';
import CustomLabel from './CustomLabel.vue';
import InfoRow from './InfoRow.vue';

export default {
  name: 'MovieInfoContent',
  components: { CustomLabel, InfoRow, Rate },
  props: { selectedMovie: { type: Object, required: true } },

  data() {
    return { currentRating: +this.selectedMovie.imdbRating };
  },
  computed: {
    posterBG() {
      const poster =
        this.selectedMovie.Poster === 'N/A'
          ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png'
          : this.selectedMovie.Poster;
      return poster;
    },
  },
};
</script>
<style scoped>
p {
  margin: 0;
}
.content-wrappper {
  box-sizing: border-box;
  padding: 15px;
}

.flex-wrapper {
  display: flex;
}

.ratings-wrapper {
  display: flex;
  align-items: center;
}
.ratings-value {
  font-size: 15px;
  padding-left: 10px;
  font-weight: 600;
}
.info-wrapper {
  padding-left: 25px;
}
.modal-title {
  font-size: 20px;
  padding: 10px 15px;
  background-color: rgb(82, 15, 117);
  color: #fff;
}

.modal-img {
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}
.movie-title {
  font-size: 28px;
  padding-bottom: 10px;
}
.movie-plot {
  padding: 10px 0px;
  letter-spacing: 0.5px;
}
.labels-padding {
  padding-bottom: 20px;
}
</style>
