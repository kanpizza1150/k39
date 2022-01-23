import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: ${({ theme }) => theme.navBarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LinkButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  p {
    font-size: 8px;
  }
`
