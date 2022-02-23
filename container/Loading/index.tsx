import Image from 'next/image'
import React, { FC } from 'react'
import * as Styled from './styled'
const Loading: FC = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Image src="/icons/loader.gif" layout="fill" alt="loading" />
      </Styled.Wrapper>
      Loading...
    </Styled.Container>
  )
}

export default Loading
