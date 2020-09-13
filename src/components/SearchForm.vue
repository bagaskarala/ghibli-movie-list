<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        class="my-4 text-center"
      >
        <img
          src="img/header-home.png"
          width="200"
        >
        <h1 class="mt-3 font-weight-light">
          Ghibli Worlds
        </h1>
      </b-col>
    </b-row>
    <b-row class="mb-2">
      <b-col
        cols="12"
        :md="category == 'film' ? 6 : 12"
        class="mb-2"
      >
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text>
              <b-icon-search />
            </b-input-group-text>
          </template>
          <template v-slot:append>
            <b-dropdown
              :text="category"
              variant="dark"
            >
              <b-dropdown-item
                v-for="(cat, index) in categoryOptions"
                :key="index"
                @click="changeCategory(cat)"
              >
                {{ cat }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <b-form-input
            v-model.lazy="searchTerm"
            :placeholder="`Search ${category}`"
          />
        </b-input-group>
      </b-col>
      <b-col
        v-if="category == 'film'"
        cols="12"
        md="6"
        class="mb-2"
      >
        <FilmFilter />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FilmFilter from './filter/FilmFilter.vue';

export default {
  components: { FilmFilter },
  data() {
    return {
      searchTerm: null,
      category: 'film',
      categoryOptions: ['film', 'location', 'people', 'vehicle'],
      creator: '',
    };
  },

  watch: {
    searchTerm(term) {
      this.$emit('input', term);
    },

    $route: {
      deep: true,
      immediate: true,
      handler(val, oldVal) {
        if (!oldVal || (val.query.category !== oldVal.query.category && this.categoryOptions.includes(val.query.category))) {
          this.changeCategory(val.query.category ?? this.category);
        }
      },
    },
  },

  methods: {
    changeCategory(category) {
      this.category = category;
      this.$emit('change-category', category);
    },
  },
};
</script>
