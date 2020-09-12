<template functional>
  <div>
    <b-card-title>
      <router-link :to="`/location/${props.item.id}`">
        {{ props.item.name }}
      </router-link>
    </b-card-title>
    <p class="mb-0 text-muted small">
      Climate: {{ props.item.climate }}
    </p>
    <p class="mb-0 text-muted small">
      Terrain: {{ props.item.terrain }}
    </p>
  </div>
</template>
