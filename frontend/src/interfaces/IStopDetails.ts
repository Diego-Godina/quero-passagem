import type { StopType } from '@/enums/StopType.ts'
import type IStopDetailsStation from '@/interfaces/IStopDetailsStation.ts'
import type IStop from '@/interfaces/IStop.ts'

export default interface IStopDetails {
  'id': string,
  'displayName': string,
  'name': string,
  'state': string,
  'country'?: string,
  'url': string,
  'latitude': string,
  'longitude': string,
  'address'?: string,
  'zipcode'?: string,
  'type': StopType,
  'station'?: IStopDetailsStation,
  'city'?: IStop,
  'images'?: []
}