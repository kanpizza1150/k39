import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: ${({ theme }) => theme.navBarHeight};
  box-shadow: 0px -9px 0 0 white;
  z-index: 1;
`
export const ButtonWrapper = styled.div`
  width: 330px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: black;
  position: relative;
`

export const LinkButton = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  margin-bottom: 10px;
  p {
    color: white;
  }
`

export const Icon = styled.div<{ isActive: boolean }>`
  font-size: 30px;
  transition: 0.2s all linear;
  ${({ isActive }) =>
    isActive
      ? css`
          transform: translateY(-60%);
        `
      : css`
          background-color: transparent;
        `}
`
export const Indicator = styled.div<{
  activeIndex: number
  isActive?: boolean
}>`
  border-radius: 50%;
  border: 5px solid white;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 70px;
  height: 70px;
  top: -50%;
  transform: ${({ activeIndex }) => `translateX(calc(${activeIndex} * 129px))`};
  position: absolute;
  transition: 0.2s all linear;
  &::before {
    content: '';
    position: absolute;
    top: 59%;
    left: -23px;
    width: 24px;
    height: 20px;
    box-shadow: 0px -10px 0 0 white;
    border-top-right-radius: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 59%;
    right: -23px;
    width: 24px;
    height: 20px;
    box-shadow: 0px -10px 0 0 white;
    border-top-left-radius: 20px;
    background-color: transparent;
  }
`
