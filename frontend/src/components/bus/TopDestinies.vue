<script setup lang="ts">
  import type ITopDestinies from '@/interfaces/home-view/ITopDestinies.ts'
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { TOP_DESTINIES } from '@/constants/topDestinies'

  const topDestinies = TOP_DESTINIES as ITopDestinies[]
</script>

<template>
  <section class="box-top-destinies">
    <BoxContent>
      <div class="d-flex justify-content-between">
        <div
          v-for="topDestiny in topDestinies"
          :key="topDestiny.title"
          class="d-flex flex-column gap-3"
        >
          <div class="title-top-destiny">{{ topDestiny.title }}</div>
          <div class="d-flex flex-column gap-2">
            <div
              v-for="(option, index) in topDestiny.options"
              :key="option.name"
              :class="{ 'is-last': index === topDestiny.options.length - 1 }"
            >
              <RouterLink
                class="link-top-destiny"
                :to="option.link"
              >
                {{ option.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </BoxContent>
  </section>
</template>

<style scoped>
  .box-top-destinies {
    background-color: #0d2240;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .is-last {
    font-weight: 600;
  }

  .link-top-destiny {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  .title-top-destiny {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3rem;
    text-transform: uppercase;
  }
</style>
