<script setup lang="ts">
import type { Password } from '~/types'

definePageMeta({
  layout: 'app',
})

const showAllPasswords = ref(false)

// modal
const visible = ref(false)

// const { loading, passwords, toggleVisibility } = usePasswords()
// const { loading, create } = usePasswordCreate()
// const { loading, edit } = usePasswordEdit()
// const { loading, delete } = usePasswordDelete()

const create = (data: Password) => {
  const obj = {
    login: 'hello',
    password: 'teste',
    description: 'teste desc',
  }
  console.log(obj)
}
</script>

<template>
  <div class="space-y-10">
    <DashboardHeadlineLoader :loading="false">
      <DashboardHeadline
        :show-all-passwords="showAllPasswords"
        @togglePasswordVisibility="showAllPasswords = !showAllPasswords"
        @addNewPassword="visible = true"
      />
    </DashboardHeadlineLoader>

    <PasswordCardList :loading="false">
      <PasswordCard />
    </PasswordCardList>

    <Dialog v-model:visible="visible" modal header="Store a new password" :style="{ width: '25rem' }">
      <PasswordForm @success="create" />
    </Dialog>
  </div>
</template>
