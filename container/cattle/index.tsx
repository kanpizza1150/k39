import React, { FC } from 'react'
import { IAxiosResponse } from '../../util/axios'
import * as Styled from './styed'

interface IProps {
  cattleList: IAxiosResponse
}
const Cattle: FC<IProps> = ({ cattleList }: IProps) => {
  return (
    <Styled.Container>
      <h1>วัว</h1>
      {cattleList.data.map((cattle: any) => (
        <div key={cattle._id}>{cattle.nickname}</div>
      ))}
    </Styled.Container>
  )
}

export default Cattle
