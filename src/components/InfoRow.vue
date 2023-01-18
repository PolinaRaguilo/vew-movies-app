<template>
  <div class="row-wrapper">
    <div class="row-title">
      {{ this.title }}
    </div>
    <div class="row-info">{{ this.info }}</div>
  </div>
</template>

<script>
export default {
  name: 'InfoRow',
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.row-wrapper {
  display: flex;
  border-top: 1px solid rgba(127, 145, 235, 0.5);
  padding: 10px 0;
}
.row-title {
  width: 100px;
  padding-right: 25px;
  font-weight: 600;
  font-size: 15px;
}

.row-info {
  font-size: 15px;
}
</style>
