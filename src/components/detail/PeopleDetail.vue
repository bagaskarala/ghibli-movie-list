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

    <hr>
    <h5 class="mb-3">
      Film
    </h5>

    <div v-if="peopleFilm.length == 0">
      <EmptyData />
    </div>

    <b-card-group>
      <b-card
        v-for="loc in peopleFilm"
        :key="loc.id"
        class="mb-2"
      >
        <h5>
          {{ loc.title }} ({{ loc.release_date }})
        </h5>
      </b-card>
    </b-card-group>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';
import EmptyData from '../EmptyData.vue';

export default {
  components: { EmptyData },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      peopleFilm: [],
    };
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
  },

  mounted() {
    this.peopleFilm = this.getItemFromEntity('people', this.id, this.films);
  },

  methods: {
    getItemFromEntity(targetKey, targetId, itemsArr) {
      console.log(itemsArr);
      return itemsArr.filter((item) => {
        if (Array.isArray(item[targetKey])) {
          return item[targetKey].find((key) => key.includes(targetId));
        }
        return item[targetKey].includes(targetId);
      });
    },
  },
};
</script>

<style>
</style>
