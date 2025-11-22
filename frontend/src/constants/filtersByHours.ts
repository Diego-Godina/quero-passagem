import type IFilterByHour from '@/interfaces/IFilterByHour'

export const FILTERS_BY_HOURS: IFilterByHour[] = [
  {
    text: '00h00 - 05h59',
    start: '00:00:00',
    end: '05:59:59',
  },
  {
    text: '06h00 - 11h59',
    start: '06:00:00',
    end: '11:59:59',
  },
  {
    text: '12h00 - 17h59',
    start: '12:00:00',
    end: '17:59:59',
  },
  {
    text: '18h00 - 23h59',
    start: '18:00:00',
    end: '23:59:59',
  },
]
