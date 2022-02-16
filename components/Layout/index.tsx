import React, { FC } from 'react'
import Navbar from '../Navbar'
import * as Styled from './styled'

interface IProps {}
const Layout: FC<IProps> = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Children>{children}</Styled.Children>
      <Navbar />
    </Styled.Container>
  )
}

export default Layout
