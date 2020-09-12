<template functional>
  <div>
    <b-card-title>
      <router-link :to="`/vehicle/${props.item.id}`">
        {{ props.item.name }}
      </router-link>
    </b-card-title>
    <p class="mb-0 text-muted small">
      Class: {{ props.item.vehicle_class }}
    </p>
  </div>
</template>
