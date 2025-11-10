import { DEFINE_STOPS } from '@/stores/mutations'
import { GET_STOPS } from '@/stores/actions'
import IStop from '@/interfaces/IStop'
import { getStops } from '@/services/stops'

export interface StateStops {
  stops: IStop[]
}

export const stop: Module<StateStops, State> = {
  mutations: {
    [DEFINE_STOPS](state, stops: IStop[]) {
      state.stops = stops
    }
  },

  actions: {
    async [GET_STOPS]({ commit }) {
      try {
        const { data } = await getStops()
        commit(DEFINE_STOPS, data)
      } catch (error) {
        console.error('Erro ao buscar paradas:', error)
      }
    }
  }
}