<template>
  <div>
    <div v-if="items.length == 0">
      <EmptyData />
    </div>

    <b-card-group columns>
      <b-card
        v-for="(item, index) in items"
        :key="index"
        tag="article"
        class="mb-3"
      >
        <FilmList
          v-if="category == 'film'"
          :item="item"
        />

        <PeopleList
          v-if="category == 'people'"
          :item="item"
        />

        <LocationList
          v-if="category == 'location'"
          :item="item"
        />

        <VehicleList
          v-if="category == 'vehicle'"
          :item="item"
        />
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import FilmList from './FilmList.vue';
import PeopleList from './PeopleList.vue';
import LocationList from './LocationList.vue';
import VehicleList from './VehicleList.vue';
import EmptyData from '../EmptyData.vue';

export default {
  components: {
    FilmList, PeopleList, LocationList, VehicleList, EmptyData,
  },
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
