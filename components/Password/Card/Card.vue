<script setup lang="ts">
import { Card } from 'primevue'

const menu = ref()

const menuItems = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
      },
    ],
  },
])

const toggle = (event: Event) => {
  menu.value.toggle(event)
}

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <Card>
    <template #title>
      <div class="grid gap-2 grid-cols-[1fr_max-content] items-start">
        <div class="space-y-2">
          <BaseTitle label="Google Email" size="xs" />
          <p class="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quasi iure natus, excepturi cum quos iste,
            magnam, ex et voluptates veritatis magni aliquid nisi odio obcaecati eaque temporibus maxime quas?
          </p>
        </div>

        <div class="card flex justify-center">
          <Button
            type="button"
            severity="secondary"
            icon="pi pi-ellipsis-v"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="toggle"
            size="small"
          />
          <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="mt-4 grid gap-4 md:grid-cols-[1fr_0.5fr] md:items-start md:gap-6">
        <div class="grid gap-2">
          <InputGroup>
            <InputText size="small" value="jonhdoe@email.com" disabled />
            <InputGroupAddon>
              <Button size="small" icon="pi pi-copy" severity="secondary" />
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupAddon>
              <Button
                size="small"
                :icon="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                severity="secondary"
                @click="togglePasswordVisibility"
              />
            </InputGroupAddon>
            <InputText size="small" value="**************" disabled />
            <InputGroupAddon>
              <Button size="small" icon="pi pi-copy" severity="secondary" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div class="space-y-2">
          <p class="text-sm">Password age: <strong>7 days</strong></p>
          <p class="text-xs">Created at: 2025/02/10</p>

          <div>
            <span class="text-sm font-semibold">Safe</span>
            <div class="w-full h-2 bg-gray-200 overflow-hidden rounded-full">
              <div class="bg-yellow-400 w-[80%] h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
