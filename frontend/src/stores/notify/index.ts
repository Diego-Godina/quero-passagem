import { INotification } from '@/interfaces/INotification'
import { State } from '@/stores'
import { Module } from 'vuex'
import { NOTIFY } from '@/stores/mutations'

export interface StateNotification {
  notifications: INotification[]
}

export const notification: Module<StateNotification, State> = {
  state: (): StateNotification => ({
    notifications: []
  }),

  mutations: {
    [NOTIFY] (state, newNotification: INotification) {
      newNotification.id = new Date().getTime()
      state.notifications.push(newNotification)

      setTimeout(() => {
        state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
      }, 3000)
    }
  }
}