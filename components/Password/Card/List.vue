<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean
    loadingAmount?: number
  }>(),
  {
    loadingAmount: 3,
  },
)
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-6" v-if="props.loading">
      <PasswordCardLoader v-for="i in props.loadingAmount" :key="i" :loading />
    </div>

    <slot v-else />
  </section>
</template>
