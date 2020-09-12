<template>
  <b-row>
    <b-col
      cols="12"
      class="my-3"
    >
      <h1 class="text-center">
        Ghibli Movie
      </h1>
      <b-input-group class="mt-3">
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
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: null,
      category: 'film',
      categoryOptions: ['film', 'location', 'people', 'vehicle'],
    };
  },

  watch: {
    searchTerm(term) {
      this.$emit('input', term);
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
