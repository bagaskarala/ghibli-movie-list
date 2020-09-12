<template functional>
  <div>
    <b-card-title>
      <router-link :to="`/people/${props.item.id}`">
        {{ props.item.name }}
      </router-link>
    </b-card-title>
    <p class="mb-0 text-muted small">
      Gender: {{ props.item.gender }}
    </p>
    <p class="mb-0 text-muted small">
      Age: {{ props.item.age }}
    </p>
  </div>
</template>
