import styled from 'styled-components'
import { COLORS } from '../../styles/globalStyled'

export const Container = styled.div``
export const BoxWrapper = styled.div`
  padding: ${({ theme }) => theme.globalPadding};
  margin: ${({ theme }) => theme.globalPadding};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${COLORS.dune};
  background-color: ${COLORS.romance};
  * {
    color: ${COLORS.dune};
  }
`
