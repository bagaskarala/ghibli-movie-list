<template>
  <b-container class="py-3">
    <b-row>
      <b-col>
        <div v-if="!loading">
          <FilmDetail
            v-if="category == 'film'"
            :id="id"
          />
          <PeopleDetail
            v-if="category == 'people'"
            :id="id"
          />
          <LocationDetail
            v-if="category == 'location'"
            :id="id"
          />
          <VehicleDetail
            v-if="category == 'vehicle'"
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
import FilmDetail from '../components/detail/FilmDetail.vue';
import PeopleDetail from '../components/detail/PeopleDetail.vue';
import LocationDetail from '../components/detail/LocationDetail.vue';
import VehicleDetail from '../components/detail/VehicleDetail.vue';

export default {
  name: 'ItemDetails',
  components: {
    FilmDetail, PeopleDetail, LocationDetail, VehicleDetail,
  },
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
