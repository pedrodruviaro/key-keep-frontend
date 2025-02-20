<script setup lang="ts">
import { Form } from '@primevue/forms'
import { type FormResolverOptions, type FormSubmitEvent } from '@primevue/forms'
import type { Password } from '~/types'

const emits = defineEmits<{
  success: [data: Password]
}>()

const initialValues = ref<Partial<Password>>({
  title: '',
  login: '',
  password: '',
  description: '',
})

const resolver = ({ values }: FormResolverOptions) => {
  const errors: any = {}

  const formValues = values as Password

  if (!formValues.title) {
    errors.title = [{ message: 'Title is required.' }]
  }

  if (!formValues.login) {
    errors.login = [{ message: 'Login is required.' }]
  }

  if (!formValues.password) {
    errors.password = [{ message: 'Password is required.' }]
  }

  if (formValues.description && values.description.length <= 5) {
    errors.description = [{ message: 'Description must be greater than 5 characters.' }]
  }

  return {
    values,
    errors,
  }
}

const onFormSubmit = ({ valid, values }: FormSubmitEvent) => {
  if (valid) {
    emits('success', values as Password)
  }
}
</script>

<template>
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="space-y-2">
    <label>
      <span class="text-sm">Title</span>
      <InputText type="text" name="title" size="small" />
      <Message v-if="$form.title?.invalid" severity="error" size="small" variant="simple">{{
        $form.title.error?.message
      }}</Message>
    </label>

    <label>
      <span class="text-sm">Login</span>
      <InputText type="text" name="login" size="small" />
      <Message v-if="$form.login?.invalid" severity="error" size="small" variant="simple">{{
        $form.login.error?.message
      }}</Message>
    </label>

    <label>
      <span class="text-sm">Password</span>
      <InputText type="text" name="password" size="small" />
      <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
        $form.password.error?.message
      }}</Message>
    </label>

    <label>
      <span class="text-sm">Additional Description</span>
      <Textarea rows="3" name="description" class="resize-none" />
      <Message v-if="$form.description?.invalid" severity="error" size="small" variant="simple">{{
        $form.description.error?.message
      }}</Message>
    </label>

    <div class="flex justify-end">
      <Button type="submit" label="Store" size="small"></Button>
    </div>
  </Form>
</template>
