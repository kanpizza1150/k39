import styled, { css } from 'styled-components'

export const Button = styled.button<{ isActive?: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: pink;
  padding: 0 10px;
  font-size: 12px;
  border: 1px solid;
  box-shadow: ${({ theme }) => theme.boxShadow};
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.background};
          border-color: ${({ theme }) => theme.colors.primary};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.background};
          color: ${({ theme }) => theme.colors.greyDark};
          border-color: ${({ theme }) => theme.colors.greyDark};
        `}
`
