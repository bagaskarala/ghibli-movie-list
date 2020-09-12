<template>
  <div>
    <hr>
    <h5 class="mb-3">
      {{ title }}
    </h5>

    <div v-if="items.length == 0">
      <EmptyData />
    </div>

    <b-card-group>
      <b-card
        v-for="(item,index) in items"
        :key="index"
        class="mb-2"
      >
        <slot
          v-if="item"
          :item="item || false"
        >
          Default slot
        </slot>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import EmptyData from './EmptyData.vue';

export default {
  components: { EmptyData },
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
