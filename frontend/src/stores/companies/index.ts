import IBusCompany from '@/interfaces/IBusCompany'
import IBusCompanyDetails from '@/interfaces/IBusCompanyDetails'
import { DEFINE_COMPANIES, DEFINE_COMPANY_DETAILS } from '@/stores/mutations'
import { GET_COMPANIES, GET_COMPANY_DETAILS } from '@/stores/actions'
import { getCompanies, getCompanyDetails } from '@/services/companies'

export interface StateCompanies {
  companies: IBusCompany[]
  companyDetails: Record<string, IBusCompanyDetails>
  companyLoaded: boolean
}

export const company: Module<StateCompanies, Any> = {
  state: (): StateCompanies => ({
    companies: [],
    companyDetails: {},
    companyLoaded: false
  }),

  mutations: {
    [DEFINE_COMPANIES](state, companies: IBusCompany[]) {
      state.companies = companies
    },

    [DEFINE_COMPANY_DETAILS](state, company: IBusCompanyDetails) {
      state.companyDetails[company.id] = company
    }
  },

  actions: {
    async [GET_COMPANIES]({ commit, state }) {
      try {
        const response = await getCompanies()
        const companies = response.data

        commit(DEFINE_COMPANIES, companies)

        state.companyLoaded = true
      } catch (error) {
        console.error('Erro ao buscar companhias: ', error)
      }
    },

    async [GET_COMPANY_DETAILS]({ commit, state }, idCompany: string) {
      try {
        if (state.companyDetails[idCompany]) {
          return state.companyDetails[idCompany]
        }

        const response = await getCompanyDetails(idCompany)
        commit(DEFINE_COMPANY_DETAILS, response.data)
      } catch (error) {
        console.error('Erro ao buscar detalhes das companhias: ', error)
      }
    }
  }
}