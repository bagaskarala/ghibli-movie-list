<template functional>
  <div>
    <b-card-title>
      <router-link :to="`/film/${props.item.id}`">
        {{ `${props.item.title} (${props.item.release_date})` }}
      </router-link>
    </b-card-title>
    <div>
      <b-icon-star-fill variant="warning" />
      Score: {{ props.item.rt_score }}
    </div>

    <hr>

    <b-card-text>
      {{ props.item.description }}
    </b-card-text>

    <b-card-text class="small text-muted">
      <p class="mb-0">
        Director: {{ props.item.director }}
      </p>
      <p class="mb-0">
        Producer: {{ props.item.producer }}
      </p>
    </b-card-text>
  </div>
</template>
