<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading">
    <Skeleton width="100%" height="242px" />
  </div>

  <slot v-else />
</template>
