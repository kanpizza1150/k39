import {
  format,
  addYears,
  differenceInMonths,
  differenceInYears,
  differenceInDays,
} from 'date-fns'
import { th } from 'date-fns/locale'

export interface IDateStringToDateRes {
  date: Date
  formatted: string
}
export const dateStringToDate = (dateString?: string): IDateStringToDateRes => {
  const splited: Array<number> = (
    dateString || format(new Date(), 'dd-MM-yyyy')
  )
    .split('-')
    .map((item: string) => parseInt(item))
  const year: number = splited[2]
  const month: number = splited[1] - 1
  const day: number = splited[0]
  const date: Date = new Date(year, month, day)
  return {
    date: date,
    formatted: formatDateToString(date),
  }
}

export const formatDateToString = (date: Date): string =>
  format(addYears(date, 543), 'dd LLLL yyyy', { locale: th })

export interface IGetAgeFromDateRes {
  days: number
  months: string
  years: string
}
export const getAgeFromDate = (date: Date): IGetAgeFromDateRes => {
  const days: number = differenceInDays(new Date(), date)
  const month: number = differenceInMonths(new Date(), date)
  const years: string = `${Math.floor(month / 12)} ปี ${month % 12} เดือน`
  return { days, months: `${month} เดือน`, years }
}
