<template>
  <div v-if="isShowLoader" class="spinner-wrapper"><Loading size="60" color="#fff" /></div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Loading } from 'vant';

export default {
  name: 'CustomLoader',
  components: { Loading },
  computed: { ...mapGetters(['isShowLoader']) },
};
</script>

<style scoped>
.spinner-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
