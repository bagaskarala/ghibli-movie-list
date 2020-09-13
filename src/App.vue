<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getDataByCategory('film');
    this.getDataByCategory('people');
    this.getDataByCategory('species');
    this.getDataByCategory('location');
    this.getDataByCategory('vehicle');
  },

  methods: {
    ...mapActions(['getDataByCategory']),
  },
};
</script>
