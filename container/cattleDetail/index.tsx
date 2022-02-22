import { addDays } from 'date-fns'
import React, { FC } from 'react'
import { Button } from '../../components/Button/styled'
import useCattle, { PregnancyStatus } from '../../hook/cattle'
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
  const { _id, name, nickname, dob, sire, dam, pregnancy, rut } =
    cattleDetail.data
  const { updateRutDate, updatePregnancyStatus } = useCattle(_id)
  const dateOfBirthFormat: IDateStringToDateRes = dateStringToDate(dob)
  const age: IGetAgeFromDateRes = getAgeFromDate(dateOfBirthFormat.date)
  const artificialInseminationDate: IDateStringToDateRes = dateStringToDate(
    pregnancy?.date
  )
  const fistPassed: boolean = pregnancy?.status === 2 || pregnancy?.status == 3
  const secondPassed: boolean = pregnancy?.status == 3
  const failedInsemination: boolean = pregnancy?.status === 0

  /**
   * It returns the date of the artificial insemination plus the number of days passed since the
   * artificial insemination
   * @param {number} days - number
   * @returns a string.
   */
  const calculateArtificialInseminationDate = (days: number): string =>
    pregnancy?.date
      ? formatDateToString(addDays(artificialInseminationDate?.date, days))
      : '-'

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
          รอบ 1:
          <span>{fistPassed ? '✅' : failedInsemination ? '❌' : '⏳'}</span>
          {calculateArtificialInseminationDate(21)}
        </p>
        <p>
          รอบ 2:
          <span>{secondPassed ? '✅' : failedInsemination ? '❌' : '⏳'}</span>
          {calculateArtificialInseminationDate(42)}
        </p>
        {/* <Button onClick={() => updatePregnancyStatus(PregnancyStatus.FAILED)}>
          เปลี่ยน status
        </Button> */}
      </div>
      <div>
        ประวัติการผสม:
        {pregnancy?.history?.map(
          (preg: { date: string; semen: any }, index: number) => (
            <div key={index}>
              <p>{preg.date}</p>
              <p>
                {preg.semen?.title}:{preg.semen?.dose}
              </p>
            </div>
          )
        )}
      </div>
      <div>
        เป็นสัด:{' '}
        {rut &&
          rut.map((date: string, index: number) => <p key={index}>{date}</p>)}
        {/* <Button onClick={() => updateRutDate('12-02-2022')}>
          เพิ่มวันเป็นสัด
        </Button> */}
      </div>
    </Styled.Container>
  )
}

export default CattleDetail
