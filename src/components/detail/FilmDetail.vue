<template>
  <b-card>
    <b-card-title>
      {{ `${detail.title} (${detail.release_date})` }}
    </b-card-title>
    <b-card-sub-title>
      <b-icon-star-fill variant="warning" />
      Score: {{ detail.rt_score }}
    </b-card-sub-title>

    <hr>

    <b-card-text>
      {{ detail.description }}
    </b-card-text>

    <b-card-text class="small text-muted">
      <p class="mb-0">
        Director: {{ detail.director }}
      </p>
      <p class="mb-0">
        Producer: {{ detail.producer }}
      </p>
    </b-card-text>

    <hr>
    <h5 class="mb-3">
      People
    </h5>

    <div v-if="filmPeople.length == 0">
      <EmptyData />
    </div>

    <b-list-group>
      <b-list-group-item
        v-for="(ppl, index) in filmPeople"
        :key="index"
        class="flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <router-link
            class="h5 mb-1"
            :to="`/people/${ppl.id}`"
          >
            {{ ppl.name }}
          </router-link>
          <div>
            <b-badge
              v-if="ppl.species_detail"
              variant="info"
            >
              {{ ppl.species_detail.name }}
            </b-badge>
          </div>
        </div>

        <small class="mb-0">
          Gender: {{ ppl.gender }}
        </small> ●
        <small class="mb-0">
          Age: {{ ppl.age }}
        </small> ●
        <small class="mb-0">
          Eye Color: {{ ppl.eye_color }}
        </small> ●
        <small class="mb-0">
          Hair Color: {{ ppl.hair_color }}
        </small>
        <span />
      </b-list-group-item>
    </b-list-group>

    <DetailSegment
      title="Locations"
      :items="filmLocations"
    >
      <template v-slot:default="{item}">
        <router-link
          class="h5"
          :to="`/location/${item.id}`"
        >
          {{ item.name }}
        </router-link>
        <div class="text-muted">
          {{ item.terrain }}
        </div>
      </template>
    </DetailSegment>

    <DetailSegment
      title="Vehicles"
      :items="filmVehicles"
    >
      <template v-slot:default="{item}">
        <router-link
          class="h5"
          :to="`/vehicle/${item.id}`"
        >
          {{ item.name }}
        </router-link>
        <div class="text-muted">
          {{ item.vehicle_class }}
        </div>
      </template>
    </DetailSegment>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';
import EmptyData from '../EmptyData.vue';
import DetailSegment from '../DetailSegment.vue';

export default {
  components: { EmptyData, DetailSegment },

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
      return this.films.find((item) => item.id === this.id) || {};
    },

    filmPeople() {
      if (this.loading) return [];
      return this.checkItemInFilm(this.people, this.id).map((ppl) => ({
        ...ppl,
        species_detail: this.filmSpecies.find((spc) => ppl.species.includes(spc.id)),
      }));
    },

    filmSpecies() {
      if (this.loading) return [];
      return this.checkItemInFilm(this.species, this.id);
    },

    filmLocations() {
      if (this.loading) return [];
      return this.checkItemInFilm(this.locations, this.id);
    },

    filmVehicles() {
      if (this.loading) return [];
      return this.checkItemInFilm(this.vehicles, this.id);
    },
  },

  methods: {
    checkItemInFilm(itemsArr, filmId) {
      return itemsArr.filter((item) => {
        if (Array.isArray(item.films)) {
          return item.films.find((film) => film.includes(filmId));
        }
        return item.films.includes(filmId);
      });
    },
  },
};
</script>

<style>
</style>
