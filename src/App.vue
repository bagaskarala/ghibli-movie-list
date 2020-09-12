<template>
  <div>
    <AppNavbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  components: { AppNavbar },

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
