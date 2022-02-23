import styled from 'styled-components'
import Button from '../../components/Button'

export const Container = styled.div``
export const Type = styled.div<{ type: number }>`
  border-radius: ${({ theme }) => theme.borderRadius};
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
  background-color: rgba(255, 255, 255, 0.2);
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

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 10px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.greyDark};
  }
  p {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const FilterButton = styled(Button)`
  margin: 0 5px;
`
