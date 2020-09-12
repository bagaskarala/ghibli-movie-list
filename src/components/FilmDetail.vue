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
          <h5 class="mb-1">
            {{ ppl.name }}
          </h5>
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

    <hr>
    <h5 class="mb-3">
      Locations
    </h5>

    <div v-if="filmLocations.length == 0">
      <EmptyData />
    </div>

    <b-card-group>
      <b-card
        v-for="loc in filmLocations"
        :key="loc.id"
        class="mb-2"
      >
        <h5>
          {{ loc.name }}
        </h5>
        <div class="text-muted">
          {{ loc.terrain }}
        </div>
      </b-card>
    </b-card-group>

    <hr>
    <h5 class="mb-3">
      Vehicles
    </h5>

    <div v-if="filmVehicles.length == 0">
      <EmptyData />
    </div>

    <b-card-group>
      <b-card
        v-for="vcl in filmVehicles"
        :key="vcl.id"
        class="mb-2"
      >
        <h5>
          {{ vcl.name }}
        </h5>
        <div class="text-muted">
          {{ vcl.vehicle_class }}
        </div>
      </b-card>
    </b-card-group>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';
import EmptyData from './EmptyData.vue';

export default {
  components: { EmptyData },

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
