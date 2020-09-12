<template>
  <b-container>
    <b-row>
      <b-col>
        <SearchForm @input="handleSearch" />
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
import AppList from '../components/AppList.vue';

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
    ...mapState(['loading', 'films']),

    filteredItems() {
      if (!this.searchTerm) return this.films;
      return this.films.filter((item) => {
        const term = this.searchTerm.toLowerCase();
        return (item.title.toLowerCase()).includes(term) || (item.director.toLowerCase()).includes(term) || (item.producer.toLowerCase()).includes(term);
      });
    },
  },

  methods: {
    handleSearch(term) {
      this.searchTerm = term;
    },
  },
};
</script>
