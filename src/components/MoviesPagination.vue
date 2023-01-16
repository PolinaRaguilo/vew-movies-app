<template>
  <div class="pagination-wrapper">
    <Pagination
      v-model="currentPageModel"
      :total-items="total"
      :items-per-page="perPage"
      :show-page-size="3"
      :prev-text="'Prev'"
      :next-text="'Next'"
    />
  </div>
</template>
<script>
import { Pagination } from 'vant';

export default {
  name: 'MoviesPagination',
  components: {
    Pagination,
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 100,
    },
    perPage: {
      type: Number,
      default: 12,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit('onChangePage', value);
      },
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  max-width: 250px;
  margin: 0 auto;
}

.pagination-wrapper
  >>> .van-pagination
  > ul
  > li.van-pagination__item--prev.van-pagination__item--disabled,
.pagination-wrapper
  >>> .van-pagination
  > ul
  > li.van-pagination__item--next.van-pagination__item--disabled {
  background-color: #646566;
  opacity: 0.5;
  color: black;
}

.pagination-wrapper >>> .van-pagination > ul > li.van-pagination__item {
  background-color: transparent;
  font-size: 15px;
  color: #fff;
}
.pagination-wrapper >>> .van-pagination > ul > li.van-pagination__item--active {
  color: #a862e9;
  background-color: #fff;
}
</style>
