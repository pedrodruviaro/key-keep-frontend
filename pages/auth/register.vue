<script setup lang="ts">
definePageMeta({
  layout: 'public',
})
</script>

<template>
  <section>
    <Card>
      <template #title>
        <BaseTitle as="h1" size="md" label="Register" class="mb-2" />
        <p class="font-normal text-sm">New here? Create your account and start using!</p>
      </template>
      <template #content>
        <form class="space-y-4 mt-4">
          <FloatLabel variant="on">
            <label for="name">Name *</label>
            <InputText size="small" id="name" required />
          </FloatLabel>

          <FloatLabel variant="on">
            <label for="email">Email *</label>
            <InputText size="small" id="email" type="email" required />
          </FloatLabel>

          <FloatLabel variant="on">
            <label for="password">Password *</label>
            <InputText size="small" id="password" type="password" required />
          </FloatLabel>

          <FloatLabel variant="on">
            <label for="repeat_password">Repeat your password *</label>
            <InputText size="small" id="repeat_password" type="password" required />
          </FloatLabel>

          <Button label="Register" size="small" type="submit" class="w-full" />
        </form>

        <div class="mt-8 flex justify-end">
          <NuxtLink to="/auth/login" class="text-sm hover:underline focus:underline">
            Already have an account? Login now!
          </NuxtLink>
        </div>
      </template>
    </Card>
  </section>
</template>
