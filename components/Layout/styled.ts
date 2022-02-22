import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  /* max-height: 100vh; */
  height: 100%;
  height: -webkit-fill-available;
  height: calc(100vh - env(safe-area-inset-bottom));
  position: fixed;
  display: grid;
  grid-template-rows: 1fr ${({ theme }) => theme.navBarHeight};
`
export const Children = styled.div`
  height: ${({ theme }) => `calc(100vh - ${theme.navBarHeight})`};
  padding: ${({ theme }) => theme.pagePadding};
  overflow: auto;
`
