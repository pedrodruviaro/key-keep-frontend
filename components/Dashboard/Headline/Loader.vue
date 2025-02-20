<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" class="flex flex-wrap justify-between gap-2">
    <Skeleton width="230px" height="39px" />
    <Skeleton width="105px" height="39px" />
  </div>

  <slot v-else />
</template>
