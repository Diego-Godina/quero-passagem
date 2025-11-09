<script setup lang="ts">
  import type INavItem from '@/interfaces/INavItem.ts'

  const props = defineProps<{
    navItem: INavItem
  }>()

  const isItemActive = (path: string) => {
    return path === '/' || path === '/onibus'
  };

</script>

<template>
  <li class="nav-item" :class="{'active': isItemActive(props.navItem.link)}">
    <RouterLink
      class="nav-link d-flex align-items-center justify-content-center"
      aria-current="page"
      :to="`${props.navItem.link}`"
    >
      <img :src="`../../../../src/assets/img/icons/${props.navItem.icon}`" :alt="`${ props.navItem.alt }`" class="icon-link" />
      <span class="title-link">{{ props.navItem.title }}</span>
      <div v-if="props.navItem.newItem" class="badge">Novo!</div>
    </RouterLink>
  </li>
</template>

<style scoped>
  .active {
    border-bottom: 4px solid #2764c0;
  }

  .nav-item {
    padding: 16px 8px;
    margin: 0 8px;
  }

  .badge {
    padding: 1px 2px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
    background-color: #0b9652;
    border-radius: 2px;
    margin-left: 4px;
  }
</style>
