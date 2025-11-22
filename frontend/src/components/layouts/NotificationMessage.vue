<script setup lang="ts">
import { useStore } from '@/stores'
import { NotificationType } from '@/interfaces/INotification'
import { computed } from 'vue'

const store = useStore()
const notifications = computed(() => {
  return store.state.notification.notifications || []
})

const context = {
  [NotificationType.SUCESSO]: 'is-success',
  [NotificationType.ATENCAO]: 'is-warning',
  [NotificationType.FALHA]: 'is-danger',
}
</script>

<template>
  <div class="notifications">
    <article
      v-for="notification in notifications"
      :key="notification.id"
      :class="context[notification.type]"
      class="message"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<style scoped>
.notifications {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
}
</style>
