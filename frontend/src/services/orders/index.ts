import api from '@/services/api'
import ISearchForm from '@/interfaces/ISearchForm'

export const getOrders = (form: ISearchForm) => {
  return api.get('/orders', {
    params: {
      'from': form.origin.id,
      'to': form.destiny.id,
      'travelDate': form.dates.start
    },
  })
}

export const getSeats = (orderId: string) => {
  return api.get(`/orders/${orderId}/seats`, {
    params: {
      'orientation': 'horizontal',
      'type': 'matrix'
    }
  })
}