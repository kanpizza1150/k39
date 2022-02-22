import React, { FC, ReactElement, useEffect, useState } from 'react'
import useWindowDimensions from '../../hook/useWindowDimension'
import Navbar from '../Navbar'
import * as Styled from './styled'

interface IProps {
  children: ReactElement
}
const Layout: FC<IProps> = ({ children }) => {
  const { height } = useWindowDimensions()
  const [pageHeight, setPageHeight] = useState('100vh')
  useEffect(() => {
    const pageHeightTemp = height ? `${height}px` : `100vh`
    setPageHeight(pageHeightTemp)
  }, [height])

  return (
    <Styled.Container pageHeight={pageHeight}>
      <Styled.Children>{children}</Styled.Children>
      <Navbar />
    </Styled.Container>
  )
}

export default Layout
