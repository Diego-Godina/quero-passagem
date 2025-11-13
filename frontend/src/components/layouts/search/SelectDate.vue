<script setup lang="ts">
  import { ref, watch } from 'vue'

  const props = defineProps<{
    id: string
    label: string
    date: string
    isLoading: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:date', value: string): void
  }>()

  const selectedDate = ref<Date | null>(null)

  const formatDateToString = (date: Date | null): string => {
    if (!date) return ''
    return date.toISOString().split('T')[0]
  }

  watch(selectedDate, (newDate) => {
    emit('update:date', formatDateToString(newDate))
  })

  watch(() => props.date, (newDate) => {
    if (newDate) {
      selectedDate.value = new Date(newDate)
    }
  }, { immediate: true })
</script>

<template>
  <div class="field w-100">
    <div class="control has-icons-left">
      <label class="label d-none" :for="id">{{ label }}</label>
      <VDatePicker
        v-model="selectedDate"
        :model-config="{ type: 'string', mask: 'DD/MM/YYYY' }"
        locale="pt-BR"
        :min-date="new Date()"
        trim-week
      >
        <template #default="{ inputValue, inputEvents }">
          <input
            :id="id"
            :value="inputValue"
            v-on="!props.isLoading ? inputEvents : {}"
            :placeholder="label"
            class="input is-large"
            :disabled="isLoading"
          />
          <span class="icon is-small is-left">
            <img src="@/assets/img/icons/icon_calendar_outline.svg" alt="data" width="15">
          </span>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>

<style scoped>
  .input {
    cursor: pointer;
  }
</style>