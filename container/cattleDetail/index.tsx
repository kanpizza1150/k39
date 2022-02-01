import { addDays } from 'date-fns'
import React, { FC } from 'react'
import {
  dateStringToDate,
  formatDateToString,
  getAgeFromDate,
  IDateStringToDateRes,
  IGetAgeFromDateRes,
} from '../../util/date'
import { ICattleDetailAxios } from '../../util/types'
import * as Styled from './styed'

interface IProps {
  cattleDetail: ICattleDetailAxios
}
const CattleDetail: FC<IProps> = ({ cattleDetail }: IProps) => {
  const { name, nickname, dob, sire, dam, pregnancy } = cattleDetail.data
  const dateOfBirthFormat: IDateStringToDateRes = dateStringToDate(dob)
  const age: IGetAgeFromDateRes = getAgeFromDate(dateOfBirthFormat.date)
  const artificialInseminationDate: IDateStringToDateRes = dateStringToDate(
    pregnancy?.date
  )
  return (
    <Styled.Container>
      <h1>
        {name}
        {nickname ? ` (${nickname})` : ''}
      </h1>
      <div>
        <p>วัน/เดือน/ปี เกิด: {dob ? dateOfBirthFormat.formatted : '-'}</p>
        <p>อายุ: {dob ? `${age.years} (${age.months})` : '-'}</p>
      </div>
      <div>
        <p>Sire: {sire}</p>
        <p>Dam: {dam}</p>
      </div>
      <div>
        <p>
          วันผสม: {pregnancy?.date && artificialInseminationDate?.formatted}
        </p>
        <p>
          รอบ 1 :{' '}
          {pregnancy?.date &&
            formatDateToString(addDays(artificialInseminationDate?.date, 21))}
          <span>
            {pregnancy?.status === 2 || pregnancy?.status == 3 ? 'pass' : '...'}
          </span>
        </p>{' '}
        <p>
          รอบ 2 :{' '}
          {pregnancy?.date &&
            formatDateToString(addDays(artificialInseminationDate?.date, 42))}
          <span>{pregnancy?.status == 3 ? 'pass' : '...'}</span>
        </p>
      </div>
    </Styled.Container>
  )
}

export default CattleDetail
