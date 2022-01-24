import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
`
export const Type = styled.div<{ type: number }>`
  border-radius: ${({ theme }) => theme.borderRadius};
  /* border: 1px solid ${({ type }) => (type > 0 ? 'red' : 'blue')}; */
  padding: 0 5px;
  width: fit-content;
  background-color: ${({ theme, type }) => theme.colors.semenBackground[type]};
  color: ${({ theme }) => theme.colors.background};
  align-self: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 10px;
  padding-top: 50px;
  bottom: 0;
`
export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 60px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  align-items: center;
  font-size: 12px;
  p {
    color: ${({ theme }) => theme.colors.greyDark};
  }
`

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  position: absolute;
  margin-bottom: 50px;
`
export const FilterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export const Title = styled.div`
  font-weight: bold;
  text-align: center;
`
