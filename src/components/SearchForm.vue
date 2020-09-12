<template>
  <b-row>
    <b-col
      cols="12"
      class="my-3"
    >
      <h1 class="text-center">Ghibli Movie</h1>
      <b-form-input
        v-model.lazy="searchTerm"
        placeholder="Search Movies"
      ></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: null,
    };
  },

  watch: {
    searchTerm(term) {
      this.$emit('input', term);
    },
  },
};
</script>
