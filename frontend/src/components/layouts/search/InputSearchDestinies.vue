<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { GET_STOPS } from '@/stores/actions'
  import { useStore } from "@/stores"
  import IStop from '@/interfaces/IStop'

  const store = useStore()

  const props = defineProps<{
    id: string
    icon: string,
    placeholder: string,
  }>()

  const showSuggestions = ref(false)
  const filterValue = ref('')
  const idStopSelected = ref('')

  const allStops = computed<IStop[]>(() => {
    if(store?.state?.stop?.stops && Array.isArray(store.state.stop.stops)) {
      return store.state.stop.stops
    }

    return []
  })

  const filteredStops = computed<IStop[]>(() => {
    if (!allStops.value || !Array.isArray(allStops.value)) {
      return []
    }

    if (!filterValue.value) return allStops.value

    return allStops.value.filter((stop: IStop) =>
      stop.name.toLowerCase().includes(filterValue.value.toLowerCase())
    )
  })

  const toggleSuggestions = () => {
    showSuggestions.value = filterValue.value && filterValue.value.length > 0
  }

  const selectSuggestion = (stop: IStop) => {
    filterValue.value = stop.name
    idStopSelected.value = stop.id
    showSuggestions.value = false
  }

  onMounted(() => {
    const stops = store.state.stop?.stops

    if (!stops || !stops.length) {
      store.dispatch(GET_STOPS)
    }
  })
</script>

<template>
  <div class="field">
    <div class="control has-icons-left">
      <input type="hidden" :name="props.id" v-model="idStopSelected" />
      <input
        class="input has-background-white is-large custom-autocomplete"
        :id="props.id"
        type="text"
        :placeholder="props.placeholder"
        v-model="filterValue"
        list="stops-list"
        @focus="toggleSuggestions"
        @input="toggleSuggestions"
      />

      <div v-if="showSuggestions && filteredStops.length" class="suggestions-list">
        <div
          v-for="stop in filteredStops"
          :key="stop.id"
        >
          <div
            class="suggestion-item"
            @click="selectSuggestion(stop)"
          >
            {{ stop.name }}
          </div>

          <div
            v-if="stop.substops && stop.substops.length"
            class="substops-container"
          >
            <div
              v-for="subStop in stop.substops"
              :key="subStop.id"
              class="suggestion-item substop-item"
              @click="selectSuggestion(subStop)"
            >
              ↳ {{ subStop.name }}
            </div>
          </div>
        </div>
      </div>

      <span class="icon is-small is-left">
        <img :src="`../../../../src/assets/img/icons/${props.icon}`" :alt="`${props.icon}`" width="15">
      </span>
    </div>
  </div>
</template>

<style scoped>
  .custom-autocomplete {
    position: relative;
  }

  .suggestions-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #dbdbdb;
    border-top: none;
    border-radius: 0 0 4px 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  }

  .suggestion-item {
    padding: 8px 12px;
    cursor: pointer;
    border-bottom: 1px solid #f5f5f5;
    font-size: 14px;
  }

  .suggestion-item:hover {
    background-color: #293366f0;
    color: #fff;
  }

  .suggestion-item:last-child {
    border-bottom: none;
  }
</style>
