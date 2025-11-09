<script setup lang="ts">
import { computed, onMounted } from 'vue';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

const props = defineProps<{
  id: string,
  label: string
}>()

const todayFormatted = computed(() => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
});

onMounted(() => {
  bulmaCalendar.attach(`#${props.id}`, {
    minDate: todayFormatted.value,
    color: 'black',
    dateFormat: 'dd/MM/yyyy',
    displayFormat: 'dd/MM/yyyy',
    lang: 'pt-BR',
  });
});
</script>

<template>
  <div class="field w-100">
    <div class="control">
      <label class="label d-none" :for="props.id">{{ props.label }}</label>
      <input
        :id="props.id"
        :name="props.id"
        class="input is-large"
        type="date"
        data-display-mode="default"
      >
    </div>
  </div>
</template>