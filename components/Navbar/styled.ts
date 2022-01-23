import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  bottom: 0;
  background-color: transparent;
  margin-bottom: 10px;
`
export const LinkButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  p {
    font-size: 8px;
  }
`
