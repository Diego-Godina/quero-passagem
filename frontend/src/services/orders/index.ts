import api from '@/services/api'
import ISearchForm from '@/interfaces/ISearchForm'

export const getOrders = (form: ISearchForm) => {
  return api.get('/orders', {
    params: {
      'from': form.value.origin.id,
      'to': form.value.destiny.id,
      'travelDate': form.value.dates.start
    },
  })
}
