import React, { FC, ReactNode } from 'react'
import * as Styled from './styled'
interface IProps {
  onClick?: () => void
  isActive?: boolean
  children?: ReactNode
  className?: string
}
const Button: FC<IProps> = ({ onClick, isActive, children, className }) => {
  return (
    <Styled.Button
      onClick={onClick}
      isActive={!!isActive}
      className={className}
    >
      {children}
    </Styled.Button>
  )
}

export default Button
