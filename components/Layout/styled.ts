import styled, { css } from 'styled-components'

export const Container = styled.div<{ pageHeight: string }>`
  display: grid;
  grid-template-rows: 1fr ${({ theme }) => theme.navBarHeight};
  height: ${({ pageHeight }) => pageHeight};
`
export const Children = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
  overflow: auto;
`
