<template>
  <b-card>
    <b-card-title>
      {{ detail.name }}
      <b-badge
        v-if="speciesObject"
        variant="info"
      >
        {{ speciesObject.name }}
      </b-badge>
    </b-card-title>

    <b-card-text class="text-muted">
      <p class="mb-0">
        Gender: {{ detail.gender }}
      </p>
      <p class="mb-0">
        Age: {{ detail.age }}
      </p>
    </b-card-text>

    <DetailSegment
      title="Film"
      :items="peopleFilms"
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
    ...mapState(['films', 'people', 'species', 'locations', 'vehicles', 'loading']),

    detail() {
      if (this.loading) return {};
      return this.people.find((item) => item.id === this.id) || {};
    },

    speciesObject() {
      return this.species.find((spc) => spc.people && !!spc.people.find((ppl) => ppl.includes(this.id)));
    },

    peopleFilms() {
      if (!this.detail?.films?.length) return [];
      return this.detail.films.map((filmUrl) => this.films.find((film) => filmUrl.includes(film.id)));
    },
  },
};
</script>
