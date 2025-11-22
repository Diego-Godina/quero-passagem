import api from '@/services/api'

export const getStops = () => api.get('/stops')
export const getStopDetails = (idStop: string) => api.get(`/stops/${idStop}`)
