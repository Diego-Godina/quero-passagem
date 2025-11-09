import type ISeat from '@/interfaces/ISeat.ts'

export default interface ISeats {
  'orientation': string,
  'floor': number,
  'seatsLayout': string,
  'seats': ISeat[][]
}