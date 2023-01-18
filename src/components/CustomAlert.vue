<template><div /></template>

<script>
import { showNotify } from 'vant';
import { mapGetters } from 'vuex';

export default {
  name: 'CustomAlert',
  methods: {
    showNotification({ variant, msg, duration }) {
      showNotify({
        type: variant,
        message: msg,
        duration,
      });
    },
  },
  computed: { ...mapGetters(['message']) },
  watch: { message: 'showNotification' },
};
</script>
<style scoped></style>
