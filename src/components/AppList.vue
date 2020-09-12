<template>
  <b-card-group columns>
    <b-card
      v-for="(item, index) in items"
      :key="index"
      tag="article"
      class="mb-2"
    >
      <div v-if="category == 'film'">
        <b-card-title>
          <router-link :to="`/film/${item.id}`">
            {{ `${item.title} (${item.release_date})` }}
          </router-link>
        </b-card-title>
        <div>
          <b-icon-star-fill variant="warning" />
          Score: {{ item.rt_score }}
        </div>

        <hr>

        <b-card-text>
          {{ item.description }}
        </b-card-text>

        <b-card-text class="small text-muted">
          <p class="mb-0">
            Director: {{ item.director }}
          </p>
          <p class="mb-0">
            Producer: {{ item.producer }}
          </p>
        </b-card-text>
      </div>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
