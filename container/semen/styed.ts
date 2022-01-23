import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
`
export const Type = styled.div<{ type: number }>`
  border-radius: 5px;
  border: 1px solid ${({ type }) => (type > 0 ? 'red' : 'blue')};
  padding: 5px;
  width: fit-content;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
