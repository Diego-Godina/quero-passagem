import api from '@/services/api'

export const getCompanies = () => api.get('/companies')
export const getCompanyDetails = (idCompany: string) => api.get(`/companies/${idCompany}`)