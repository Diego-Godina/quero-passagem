import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as vuexUseStore } from 'vuex'
import { StateStops, stop } from '@/stores/stops'

export interface State {
  stop: StateStops
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    notifications: [],
    stop: {
      stops: []
    }
  },
  modules: {
    stop
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}