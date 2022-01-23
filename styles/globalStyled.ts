import * as styled from 'styled-components'

const commonTheme: styled.DefaultTheme = {
  navBarHeight: '70px',
  pagePadding: '20px 20px 70px 20px',
}
export const lightTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: 'black',
    background: 'white',
  },
  boxShadow: `0px 0px 19px 1px rgba(0, 0, 0, 0.1)`,
}
export const darkTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: 'white',
    background: 'black',
  },
  boxShadow: `0px 0px 19px 1px rgba(1, 1, 1, 0.1)`,
}

export default styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.2s ease-in;
    font-family: 'Prompt', sans-serif;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`
