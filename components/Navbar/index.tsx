import React, { FC } from 'react'
import * as Styled from './styled'

import { NextRouter, useRouter } from 'next/router'
interface IProps {}
const Navbar: FC<IProps> = () => {
  const paths: Record<'home' | 'cattle' | 'semen', string> = {
    home: '/',
    cattle: '/cattle',
    semen: '/semen',
  }
  const router: NextRouter = useRouter()
  const handleRedirect = (path: string): void => {
    router.push(path)
  }
  const activePath = router.pathname

  const checkIsActive = (path: string): boolean => activePath.includes(path)
  const getActivePathIndex = (): number => {
    if (activePath.includes(paths.cattle)) {
      return 1
    } else if (activePath.includes(paths.semen)) {
      return 2
    } else {
      return 0
    }
  }

  return (
    <Styled.Container>
      <Styled.ButtonWrapper>
        <Styled.LinkButton onClick={() => handleRedirect(paths.home)}>
          <Styled.Icon
            isActive={
              !checkIsActive(paths.cattle) && !checkIsActive(paths.semen)
            }
          >
            ✨
          </Styled.Icon>
          {activePath === paths.home && <p>สรุป</p>}
        </Styled.LinkButton>
        <Styled.LinkButton onClick={() => handleRedirect(paths.cattle)}>
          <Styled.Icon isActive={checkIsActive(paths.cattle)}>🐮</Styled.Icon>
          {checkIsActive(paths.cattle) && <p>วัว</p>}
        </Styled.LinkButton>
        <Styled.LinkButton onClick={() => handleRedirect(paths.semen)}>
          <Styled.Icon isActive={checkIsActive(paths.semen)}>🧪</Styled.Icon>
          {checkIsActive(paths.semen) && <p>น้ำเชื้อ</p>}
        </Styled.LinkButton>
        <Styled.Indicator activeIndex={getActivePathIndex()} />
      </Styled.ButtonWrapper>
    </Styled.Container>
  )
}

export default Navbar
