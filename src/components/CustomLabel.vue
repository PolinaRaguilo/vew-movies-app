<template>
  <div class="label">{{ this.value }}</div>
</template>

<script>
export default {
  name: 'CustomLabel',
  props: {
    value: { type: String || Number, required: true },
    color: { type: String },
  },
};
</script>
<style scoped>
.label {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  background-color: green;
  color: #fff;
  margin-right: 7px;
}
</style>
