<script setup lang="ts">
const props = defineProps<{
  showAllPasswords: boolean
}>()

const emits = defineEmits<{
  togglePasswordVisibility: []
  addNewPassword: []
}>()
</script>

<template>
  <section class="flex flex-wrap gap-2 justify-between items-center">
    <div class="flex items-center gap-2">
      <BaseTitle label="Credentials stored" size="sm" />
      <Button
        variant="text"
        size="small"
        :icon="props.showAllPasswords ? 'pi pi-eye-slash' : 'pi pi-eye'"
        v-tooltip.bottom="props.showAllPasswords ? 'Hide all passwords' : 'Show all passwords'"
        :aria-label="props.showAllPasswords ? 'Hide all passwords' : 'Show all passwords'"
        @click="emits('togglePasswordVisibility')"
      />
    </div>

    <Button label="Add New" icon="pi pi-plus" size="small" @click="emits('addNewPassword')" />
  </section>
</template>
