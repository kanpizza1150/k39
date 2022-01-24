import { NextRouter, useRouter } from 'next/router'
import React, { FC } from 'react'
import Button from '../../components/Button'
import { IDashboardProps } from '../../pages'
import * as Styled from './styed'
interface IProp {
  semen: IDashboardProps['semen']
}
const Dashboard: FC<IProp> = ({ semen }: IProp) => {
  const router: NextRouter = useRouter()
  return (
    <Styled.Container>
      <h1>Welcome to K39</h1>
      <div>
        <h2>น้ำเชื้อ</h2>
        <div>ทั้งหมด {semen.total.toLocaleString()}</div>
        <div>แยกเพศ {semen.totalSexedSemen.toLocaleString()}</div>
        <div>รวมเพศ {semen.totalNormalSemen.toLocaleString()}</div>
        <Button onClick={() => router.push('/semen')}>ดูทั้งหมด</Button>
      </div>
    </Styled.Container>
  )
}

export default Dashboard
