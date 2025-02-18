<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - KeyKeep` : 'KeyKeep'
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
