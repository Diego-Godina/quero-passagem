import type IBusCompany from '@/interfaces/companies/IBusCompany.ts'
import type IStop from '@/interfaces/stops/IStop.ts'

export default interface IOrder {
  id: string
  company: IBusCompany
  from: IStop
  to: IStop
  availableSeats: number
  seatsLayout: string
  withBPE: boolean
  departure: {
    date: string
    time: string
  }
  arrival: {
    date: string
    time: string
  }
  travelDuration: number
  travelDistance: string
  seatClass: string
  price: {
    seatPrice: number
    taxPrice: number
    price: number
    ccTaxPrice: number
  }
  insurance: number
  allowCanceling: boolean
  travelCancellationLimitDate: string
  travelCancellationFee: number
  manualConfirmation: boolean
  CPFRequired: boolean
  loungeVipAvailable: boolean
  maximumAllowedPassengers: number | null
  connection: {
    node: IStop | null
    waitingInformation: {
      arrival: string
      departure: {
        date: string
        time: string
      }
    }
    company: IBusCompany
    seatClass: string
    availableSeats: number
    seatsLayout: string
    withBPE: boolean
    loungeVipAvailable: boolean
  } | null
}
