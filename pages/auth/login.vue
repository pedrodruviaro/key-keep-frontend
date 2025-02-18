<script setup lang="ts">
definePageMeta({
  layout: 'public',
})
</script>

<template>
  <section>
    <Card>
      <template #title>
        <BaseTitle as="h1" size="md" label="Login" class="mb-2" />
        <p class="font-normal text-sm">Welcome back! Enter with your credentials</p>
      </template>
      <template #content>
        <form class="space-y-4 mt-4">
          <FloatLabel variant="on">
            <label for="email">Email *</label>
            <InputText size="small" id="email" type="email" required />
          </FloatLabel>

          <FloatLabel variant="on">
            <label for="password">Password *</label>
            <InputText size="small" id="password" type="password" required />
          </FloatLabel>

          <Button label="Login" size="small" type="submit" class="w-full" />
        </form>

        <div class="mt-8 flex justify-end">
          <NuxtLink to="/auth/register" class="text-sm hover:underline focus:underline">
            Don't have an account? Register now!
          </NuxtLink>
        </div>
      </template>
    </Card>
  </section>
</template>
