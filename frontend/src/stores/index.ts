import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as vuexUseStore } from 'vuex'
import { StateStops, stop } from '@/stores/stops'
import { notification, StateNotification } from '@/stores/notify'

export interface State {
  stop: StateStops
  notification: StateNotification
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    stop: {
      stops: []
    }
  },
  modules: {
    stop,
    notification
  }
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}