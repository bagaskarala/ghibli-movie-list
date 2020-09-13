<template>
  <b-container>
    <b-row>
      <b-col>
        <SearchForm
          @input="handleSearch"
          @change-category="category = $event"
        />
      </b-col>
    </b-row>

    <AppList
      v-if="!loading"
      :items="filteredItems"
      :category="category"
    />
    <div
      v-else
      class="d-flex justify-content-center my-5"
    >
      <b-spinner label="Spinning" />
    </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import SearchForm from '../components/SearchForm.vue';
import AppList from '../components/list/AppList.vue';

export default {
  name: 'Home',
  components: { SearchForm, AppList },

  data() {
    return {
      searchTerm: '',
      category: 'film',
    };
  },

  computed: {
    ...mapState(['loading', 'films', 'people', 'locations', 'vehicles']),

    filteredItems() {
      const term = this.searchTerm.toLowerCase();

      if (this.category === 'film') {
        if (!this.searchTerm) return this.filteredFilms;
        return this.filteredFilms.filter((item) => (item.title.toLowerCase()).includes(term) || (item.director.toLowerCase()).includes(term) || (item.producer.toLowerCase()).includes(term));
      }

      if (this.category === 'people') {
        if (!this.searchTerm) return this.people;
        return this.people.filter((item) => (item.name.toLowerCase()).includes(term));
      }

      if (this.category === 'location') {
        if (!this.searchTerm) return this.locations;
        return this.locations.filter((item) => (item.name.toLowerCase()).includes(term));
      }

      if (this.category === 'vehicle') {
        if (!this.searchTerm) return this.vehicles;
        return this.vehicles.filter((item) => (item.name.toLowerCase()).includes(term));
      }

      return [];
    },

    filteredFilms() {
      if (this.$route.query.creator) {
        return this.films.filter((item) => item.director === this.$route.query.creator || item.producer === this.$route.query.creator);
      }
      return this.films;
    },
  },

  watch: {
    category: {
      immediate: true,
      handler(val) {
        this.$router.replace({
          path: '/home',
          query: {
            ...this.$route.query,
            category: val,
          },
        }).catch(() => { });
      },
    },
  },

  methods: {
    handleSearch(term) {
      this.searchTerm = term;
    },
  },
};
</script>
