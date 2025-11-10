import api from '@/services/api'

export const getStops = () => api.get('/stops')