import IOrder from '@/interfaces/IOrder'
import { CLEAR_SEATS, DEFINE_FORM, DEFINE_ORDERS, DEFINE_SEATS } from '@/stores/mutations'
import { GET_ORDERS, GET_SEATS } from '@/stores/actions'
import { getOrders, getSeats } from '@/services/orders'
import ISearchForm from '@/interfaces/ISearchForm'
import ISeats from '@/interfaces/ISeats'

const initialForm: ISearchForm = {
  origin: { name: '', id: '' },
  destiny: { name: '', id: '' },
  dates: { start: '', end: '' }
}

export interface StateOrders {
  orders: IOrder[],
  form: ISearchForm,
  seats: ISeats[]
}

export const order: Module<StateOrders, Any> = {
  state: (): StateOrders => ({
    orders: [],
    form: initialForm,
    seats: []
  }),

  mutations: {
    [DEFINE_ORDERS](state, orders: IOrder[]) {
      state.orders = orders
    },
    [DEFINE_FORM](state, form: ISearchForm) {
      state.form = form
    },
    [DEFINE_SEATS](state, payload: { seats: ISeats[]; orderId: string }) {
      state.seats[payload.orderId] = payload.seats
    }
  },

  actions: {
    async [GET_ORDERS]({ commit }, form: ISearchForm) {
      try {
        const response = await getOrders(form)
        commit(DEFINE_ORDERS, response.data)
        commit(DEFINE_FORM, form)
      } catch (error) {
        console.error('Erro ao buscar tickets', error)
      }
    },
    async [GET_SEATS]({ commit }, orderId: string) {
      try {
        const response = await getSeats(orderId)
        commit(DEFINE_SEATS, { seats: response.data, orderId })
      } catch (error) {
        console.error('Erro ao buscar assentos', error)
      }
    }
  }
}