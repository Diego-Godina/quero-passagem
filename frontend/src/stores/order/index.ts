import IOrder from '@/interfaces/IOrder'
import { DEFINE_FORM, DEFINE_ORDERS } from '@/stores/mutations'
import { GET_ORDERS } from '@/stores/actions'
import { getOrders } from '@/services/orders'
import ISearchForm from '@/interfaces/ISearchForm'

const initialForm: ISearchForm = {
  origin: { name: '', id: '' },
  destiny: { name: '', id: '' },
  dates: { start: '', end: '' }
}

export interface StateOrders {
  orders: IOrder[],
  form: ISearchForm
}

export const order: Module<StateOrders, Any> = {
  state: (): StateOrders => ({
    orders: [],
    form: initialForm
  }),

  mutations: {
    [DEFINE_ORDERS](state, orders: IOrder[]) {
      state.orders = orders
    },
    [DEFINE_FORM](state, form: ISearchForm) {
      state.form = form
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
    }
  }
}