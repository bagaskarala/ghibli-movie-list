<template>
  <b-input-group>
    <template v-slot:prepend>
      <b-input-group-text>
        Filter creator
      </b-input-group-text>
    </template>
    <b-form-select
      v-model="creator"
      :options="creatorOptions"
    >
      <template v-slot:first>
        <b-form-select-option value="">
          -- Select --
        </b-form-select-option>
      </template>
    </b-form-select>
  </b-input-group>
</template>

<script>
export default {

  data() {
    return {
      creator: '',
    };
  },
  computed: {
    films() {
      return this.$store.state.films;
    },

    creatorOptions() {
      const director = this.films.map((film) => film.director);
      const producer = this.films.map((film) => film.producer);
      const author = [...director, ...producer];

      return Array.from(new Set(author));
    },
  },

  watch: {
    creator(val) {
      this.$router.push({
        path: '/home',
        query: {
          ...this.$route.query,
          creator: val,
        },
      }).catch(() => { });
    },

    $route: {
      deep: true,
      immediate: true,
      handler(val) {
        this.creator = val.query.creator ?? '';
      },
    },
  },
};
</script>
