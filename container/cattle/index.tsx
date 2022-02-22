import { NextRouter, useRouter } from 'next/router'
import React, { FC } from 'react'
import Button from '../../components/Button'
import { ICattle, ICattleListAxios } from '../../util/types'
import * as Styled from './styed'

interface IProps {
  cattleList: ICattleListAxios
}
const Cattle: FC<IProps> = ({ cattleList }: IProps) => {
  const router: NextRouter = useRouter()
  return (
    <Styled.Container>
      <h1>วัว</h1>
      {cattleList.data.map((cattle: ICattle) => (
        <div key={cattle._id}>
          {cattle.name} {cattle.nickname ? `(${cattle.nickname})` : ''}
          <Button onClick={() => router.push(`/cattle/${cattle._id}`)}>
            See more
          </Button>
        </div>
      ))}
    </Styled.Container>
  )
}

export default Cattle
