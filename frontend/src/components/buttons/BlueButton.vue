<script setup lang="ts">

  const props = defineProps<{
    link: string,
    title: string
  }>()
</script>

<template>
  <RouterLink
    :to="`${props.link}`"
    aria-current="page"
    class="nav-link"
  >
    <span class="title-button">{{ props.title }}</span>
  </RouterLink>
</template>

<style scoped>
  .title-button {
    background-color: #2764c0;
    border-radius: 2px;
    text-decoration: none;
    padding: 8px 18px;
    color: #f5f5f7;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2px;
    text-transform: uppercase;
  }
</style>
