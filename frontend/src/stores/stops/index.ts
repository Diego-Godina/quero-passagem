import { DEFINE_STOP_DETAILS, DEFINE_STOPS } from '@/stores/mutations'
import { GET_STOP_DETAILS, GET_STOPS } from '@/stores/actions'
import IStop from '@/interfaces/IStop'
import { getStopDetails, getStops } from '@/services/stops'
import IStopDetails from '@/interfaces/IStopDetails'
import { NotificationType } from '@/interfaces/INotification'


export interface StateStops {
  stops: IStop[],
  stopDetails: IStopDetails
}

export const stop: Module<StateStops, State> = {
  mutations: {
    [DEFINE_STOPS](state, stops: IStop[]) {
      state.stops = stops
    },
    [DEFINE_STOP_DETAILS](state, stop: IStopDetails) {
      state.stopDetails = stop
    },
  },

  actions: {
    async [GET_STOPS]({ commit }) {
      try {
        const { data } = await getStops()
        commit(DEFINE_STOPS, data)
      } catch (error) {
        console.error('Erro ao buscar paradas:', error)
      }
    },

    async [GET_STOP_DETAILS]({ commit }, idStop: string) {
      try {
        const { data } = await getStopDetails(idStop)
        commit(DEFINE_STOP_DETAILS, data)
      } catch (error) {
        console.error('Erro ao buscar paradas:', error)
      }
    },
  },
}