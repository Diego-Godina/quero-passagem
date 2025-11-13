<script setup lang="ts">
  import InputSearchDestinies from '@/components/layouts/search/InputSearchDestinies.vue'
  import SelectDate from '@/components/layouts/search/SelectDate.vue'
  import { useSearchForm } from '@/composables/useSearchForm'
  const { form, switchDestinies, submitSearch, isLoading } = useSearchForm()

</script>

<template>
  <form @submit.prevent="submitSearch">
    <div class="widget-search d-flex justify-content-between is-horizontal gap-5">
      <div class="d-flex gap-3 justify-content-between">
        <InputSearchDestinies
          id="search_origin"
          icon="icon_circle-desativado.svg"
          placeholder="Partindo de"
          v-if="form && form.origin"
          v-model:searchValue="form.origin.name"
          @update:id="form.origin.id = $event"
          :isLoading="isLoading"
        />

        <div class="exchange" :class="{'disabled': isLoading }" @click="switchDestinies()"></div>

        <InputSearchDestinies
          id="search_destiny"
          icon="icon_pin_outline-desativado.svg"
          placeholder="Indo para"
          v-if="form && form.origin"
          v-model:searchValue="form.destiny.name"
          @update:id="form.destiny.id = $event"
          :isLoading="isLoading"
        />
      </div>

      <div class="d-flex gap-3 justify-content-between">
        <div>
          <SelectDate
            id="dt-go"
            label="Data Saída"
            v-model:date="form.dates.start"
            :isLoading="isLoading"
          />
        </div>

        <div>
          <SelectDate
            id="dt-back"
            label="Data Retorno"
            v-model:date="form.dates.end"
            :isLoading="isLoading"
          />
        </div>
      </div>

      <button type="submit" class="button-widget-search d-flex align-items-center">
        <img v-if="isLoading" src="@/assets/img/loading.gif" alt="Carregando..." width="20">
        <i v-else class="uil uil-search"></i>
      </button>
    </div>
  </form>
</template>

<style scoped>
  .widget-search {
    border-radius: 8px;
    padding: 16px 0;
  }

  form {
    width: 100%;
  }

  .button-widget-search {
    background-color: #1b4a88;
    border-color: #1b4a88;
    border-radius: 4px;
    color: #f5f5f7;
    cursor: pointer;
    line-height: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 12px 24px;
    width: fit-content;
    height: 38px;
  }

  .button-widget-search:disabled, .disabled {
    opacity: 0.9;
    cursor: not-allowed;
    pointer-events: none;
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
    position: relative;
    rotate: 90deg;
  }
</style>
