import React, { FC } from 'react'
import * as Styled from './styed'
interface IProp {}
const Dashboard: FC<IProp> = () => {
  return (
    <Styled.Container>
      <h1>Welcome to K39</h1>
    </Styled.Container>
  )
}

export default Dashboard
