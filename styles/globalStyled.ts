import * as styled from 'styled-components'
export const COLORS = {
  dark: '#34342C',
  light: '#ffffff',
  darkGreen: '#6D7468',
  darkGold: '#847743',
  lightGold: '#8C8C80',
  gold: '#FAD364',
  grey: '#B8BFD6',

  shadow: '#bcbcbc',
  shadowLight: '#eeeeee',
  shadowDark: '#999999',

  dandelion: '#FFD767',
  romance: '#FFFEFD',
  dune: '#32362D',
  rangitoto: '#2E3222',
  indigo: '#4F6FDF',
  willow: '#6A7062',
}

const commonTheme: styled.DefaultTheme = {
  navBarHeight: '80px',
  pagePadding: '20px 20px 40px 20px',
  borderRadius: '50px',
}
export const lightTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: '#34342C',
    background: '#ffffff',

    grey: '#bcbcbc',
    greyLight: '#eeeeee',
    greyDark: '#999999',

    semenBackground: {
      0: '#dfaf5e',
      1: '#B8BFD6',
    },
  },
  boxShadow: `0px 0px 19px 1px rgba(0, 0, 0, 0.1)`,
}
export const darkTheme: styled.DefaultTheme = {
  ...commonTheme,
  colors: {
    primary: '#ffffff',
    background: COLORS.dune,

    grey: '#bcbcbc',
    greyLight: '#eeeeee',
    greyDark: '#999999',

    semenBackground: {
      0: '#dfaf5e',
      1: '#B8BFD6',
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
  html {
    height: -webkit-fill-available;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    min-height: -webkit-fill-available;
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
