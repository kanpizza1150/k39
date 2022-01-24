import React, { FC, ReactNode } from 'react'
import * as Styled from './styled'
interface IProps {
  onClick?: () => void
  isActive?: boolean
  children?: ReactNode
}
const Button: FC<IProps> = ({ onClick, isActive, children }) => {
  return (
    <Styled.Button onClick={onClick} isActive={!!isActive}>
      {children}
    </Styled.Button>
  )
}

export default Button
