export default interface IBusCompanyDetails {
  id: string
  name: string
  logo: {
    svg?: string
    jpg?: string
  }
  phone?: string
  cnpj?: string
  description: {
    pt?: string
    en?: string
    es?: string
  }
}