<template>
  <b-card>
    <b-card-title>
      {{ detail.name }}
    </b-card-title>

    <b-card-text class="text-muted">
      <p class="mb-0">
        Terrain: {{ detail.terrain }}
      </p>
      <p class="mb-0">
        Climate: {{ detail.climate }}
      </p>
      <p class="mb-0">
        Surface Water: {{ detail.surface_water }}
      </p>
    </b-card-text>

    <DetailSegment
      title="Residents"
      :items="locationResidents"
    >
      <template v-slot:default="{item}">
        <router-link
          v-if="item.name"
          class="h5"
          :to="`/people/${item.id}`"
        >
          {{ item.name }}
        </router-link>
        <span v-else>Not found</span>
      </template>
    </DetailSegment>

    <DetailSegment
      title="Film"
      :items="locationFilms"
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
    ...mapState(['films', 'people', 'locations', 'loading']),

    detail() {
      if (this.loading) return {};
      return this.locations.find((item) => item.id === this.id) || {};
    },

    locationResidents() {
      if (!this.detail?.residents?.length) return [];
      return this.detail.residents.map((peopleUrl) => (this.people.find((ppl) => peopleUrl.includes(ppl.id))) ?? { name: null });
    },

    locationFilms() {
      if (!this.detail?.films?.length) return [];
      return this.detail.films.map((filmUrl) => this.films.find((film) => filmUrl.includes(film.id)));
    },
  },
};
</script>
