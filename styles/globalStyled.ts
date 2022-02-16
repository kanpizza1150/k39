import * as styled from 'styled-components'

const commonTheme: styled.DefaultTheme = {
  navBarHeight: '80px',
  pagePadding: '20px 20px 40px 20px',
  borderRadius: '50px',
}
export const lightTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: '#000000',
    background: '#ffffff',

    grey: '#bcbcbc',
    greyLight: '#eeeeee',
    greyDark: '#999999',

    semenBackground: {
      0: '#dfaf5e',
      1: '#61714d',
    },
  },
  boxShadow: `0px 0px 19px 1px rgba(0, 0, 0, 0.1)`,
}
export const darkTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: '#ffffff',
    background: '#000000',

    grey: '#bcbcbc',
    greyLight: '#eeeeee',
    greyDark: '#999999',

    semenBackground: {
      0: '#dfaf5e',
      1: '#61714d',
    },
  },
  boxShadow: `0px 0px 19px 1px rgba(1, 1, 1, 0.1)`,
}

export default styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.transparent};
    transition: all 0.2s ease-in;
    font-family: 'Prompt', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
  h1 {
    text-align: center;
  }
`
