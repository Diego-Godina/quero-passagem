import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
import { createStore, useStore as vuexUseStore } from 'vuex'
import { StateStops, stop } from '@/stores/stops'
import { StateOrders, order } from '@/stores/order'
import { notification, StateNotification } from '@/stores/notify'
import { company } from '@/stores/companies'

export interface State {
  stop: StateStops
  notification: StateNotification
  order: StateOrders
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    stop,
    notification,
    order,
    company
  },
})

export function useStore(): Store<State> {
  return vuexUseStore(key)
}