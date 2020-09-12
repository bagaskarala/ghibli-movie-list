<template>
  <b-card>
    <b-card-title>
      {{ detail.name }}
    </b-card-title>
    <b-card-sub-title>
      {{ detail.description }}
    </b-card-sub-title>

    <b-card-text class="text-muted mt-2">
      <p class="mb-0">
        Class: {{ detail.vehicle_class }}
      </p>
      <p class="mb-0">
        Length: {{ detail.length }}
      </p>
    </b-card-text>

    <DetailSegment
      title="Pilot"
      :items="vehiclePilots"
    >
      <template v-slot:default="{item}">
        <router-link
          class="h5"
          :to="`/people/${item.id}`"
        >
          {{ item.name }}
        </router-link>
      </template>
    </DetailSegment>

    <DetailSegment
      title="Film"
      :items="vehicleFilms"
    >
      <template v-slot:default="{item}">
        <router-link
          class="h5"
          :to="`/film/${item.id}`"
        >
          {{ item.title }} ({{ item.release_date }})
        </router-link>
      </template>
    </DetailSegment>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';
import DetailSegment from '../DetailSegment.vue';

export default {
  components: { DetailSegment },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(['films', 'people', 'vehicles', 'loading']),

    detail() {
      if (this.loading) return {};
      return this.vehicles.find((item) => item.id === this.id) || {};
    },

    vehiclePilots() {
      if (!this.detail?.pilot) return [];
      return [this.people.find((ppl) => this.detail.pilot.includes(ppl.id))];
    },

    vehicleFilms() {
      if (!this.detail?.films) return [];
      return [this.films.find((film) => this.detail.films.includes(film.id))];
    },
  },
};
</script>
