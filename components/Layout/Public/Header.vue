<script setup lang="ts"></script>

<template>
  <header class="bg-neutral-900 text-neutral-50 py-2.5 shadow">
    <div class="container flex justify-between items-center gap-2">
      <NuxtLink to="/" class="font-mono text-lg">KeyKeep</NuxtLink>

      <Button
        label="Get started"
        size="small"
        severity="secondary"
        icon="pi pi-sign-in"
        icon-pos="right"
        as="router-link"
        to="/auth/login"
      />
    </div>
  </header>
</template>
