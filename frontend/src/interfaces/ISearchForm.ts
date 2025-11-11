import IStop from '@/interfaces/IStop'

export default interface ISearchForm {
  origin: IStop
  destiny: IStop
  dates: { start: string; end: string }
}