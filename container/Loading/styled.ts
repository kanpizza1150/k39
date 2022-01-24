import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-size: 10px;
`

export const Wrapper = styled.div`
  width: 50px;
  height: 30px;
  position: relative;
`
