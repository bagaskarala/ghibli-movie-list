<template>
  <b-container class="py-3">
    <b-row>
      <b-col>
        <div v-if="!loading">
          <FilmDetail
            v-if="category == 'film'"
            :id="id"
          />
        </div>
        <div
          v-else
          class="d-flex justify-content-center my-5"
        >
          <b-spinner label="Spinning" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FilmDetail from '../components/FilmDetail.vue';

export default {
  name: 'ItemDetails',
  components: { FilmDetail },
  computed: {
    id() {
      return this.$route.params.id;
    },

    category() {
      return this.$route.params.category;
    },

    loading() {
      return this.$store.state.loading;
    },
  },

};
</script>
