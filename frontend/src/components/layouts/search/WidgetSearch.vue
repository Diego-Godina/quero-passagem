<script setup lang="ts">
  import InputSearchDestinies from '@/components/layouts/search/InputSearchDestinies.vue'
  import SelectDates from '@/components/layouts/search/SelectDates.vue'
  import BoxContent from '@/components/layouts/BoxContent.vue'
  import { useSearchForm } from '@/composables/useSearchForm'

  const { form, switchDestinies, submitSearch } = useSearchForm()

  const props = defineProps<{
    title: string,
    buttonText: string
  }>()
</script>

<template>
  <BoxContent>
    <form @submit.prevent="submitSearch()">
      <div class="widget-search">
        <h1 class="title-widget-search">{{ props.title }}</h1>

        <InputSearchDestinies
          id="search_origin"
          icon="icon_circle-desativado.svg"
          placeholder="Partindo de"
          v-if="form && form.origin"
          v-model:searchValue="form.origin.name"
          @update:id="form.origin.id = $event"
        />

        <div class="exchange" @click="switchDestinies()"></div>

        <InputSearchDestinies
          id="search_destiny"
          icon="icon_pin_outline-desativado.svg"
          placeholder="Indo para"
          v-if="form && form.origin"
          v-model:searchValue="form.destiny.name"
          @update:id="form.destiny.id = $event"
        />

        <SelectDates
          v-model:startDate="form.dates.start"
          v-model:endDate="form.dates.end"
        />

        <button
          type="submit"
          class="button-widget-search"
        >
          {{ buttonText }}
        </button>
      </div>
    </form>
  </BoxContent>
</template>

<style scoped>
  .widget-search {
    background-color: #0D2240;
    box-shadow: 3px 3px 6px #00000059;
    border-radius: 8px;
    width: 480px;
    padding: 8px;
    position: relative;
  }

  .title-widget-search {
    position: relative;
    color: white;
    font-family: 'Sora', sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    margin: 10px 0 10px;
  }

  .button-widget-search {
    background: #2764c0;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    height: 35px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
  }

  .exchange {
    background-image: url('../../../assets/img/icons/up_down_circle.svg');
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    color: #fff;
    cursor: pointer;
    height: 38px;
    width: 38px;
    z-index: 2;
    flex-grow: 0;
    flex-shrink: 0;
    position: absolute;
    top: 34%;
    left: 87%;
  }

  @media screen and (max-width: 768px) {
    .widget-search {
      width: 300px;
    }

    .exchange {
      top: 34%;
      left: 80%;
    }
  }
</style>
