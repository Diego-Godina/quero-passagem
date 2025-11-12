import IStop from '@/interfaces/stops/IStop'

export default interface ISearchForm {
  origin: IStop
  destiny: IStop
  dates: { start: string; end: string }
}