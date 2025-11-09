<script setup lang="ts">

  const props = defineProps<{
    id: string
    icon: string,
    placeholder: string,
  }>()
</script>

<template>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input has-background-white is-large" :id="props.id" type="text" :placeholder="props.placeholder">

      <span class="icon is-small is-left">
        <img :src="`../../../../src/assets/img/icons/${props.icon}`" :alt="`${props.icon}`" width="15">
      </span>
    </p>
  </div>
</template>

<style scoped></style>
