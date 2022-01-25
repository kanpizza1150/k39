import React, { FC } from 'react'
import { ICattleDetailAxios } from '../../util/types'
import * as Styled from './styed'

interface IProps {
  cattleDetail: ICattleDetailAxios
}
const CattleDetail: FC<IProps> = ({ cattleDetail }: IProps) => {
  const { name, nickname } = cattleDetail.data
  return (
    <Styled.Container>
      <h1>
        {name}
        {nickname ? ` (${nickname})` : ''}
      </h1>
    </Styled.Container>
  )
}

export default CattleDetail
