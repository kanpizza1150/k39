import React, { FC } from 'react'
import * as Styled from './styled'
import cowIcon from '../../public/icons/cow.svg'
import semenIcon from '../../public/icons/tube.svg'
import chartIcon from '../../public/icons/chart.svg'
import { NextRouter, useRouter } from 'next/router'
import Image from '../Image'
const Navbar: FC = () => {
  const paths: Record<'home' | 'cattle' | 'semen', string> = {
    home: '/home',
    cattle: '/cattle',
    semen: '/semen',
  }
  const router: NextRouter = useRouter()
  const handleRedirect = (path: string): void => {
    router.push(path)
  }
  const activePath = router.pathname

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
          <Styled.Icon isActive={getActivePathIndex() === 0}>
            <Image src={chartIcon} alt="" width={25} height={25} />
          </Styled.Icon>
          {getActivePathIndex() === 0 && <p>สรุป</p>}
        </Styled.LinkButton>

        <Styled.LinkButton onClick={() => handleRedirect(paths.cattle)}>
          <Styled.Icon isActive={getActivePathIndex() === 1}>
            <Image src={cowIcon} alt="" width={25} height={25} />
          </Styled.Icon>
          {getActivePathIndex() === 1 && <p>วัว</p>}
        </Styled.LinkButton>

        <Styled.LinkButton onClick={() => handleRedirect(paths.semen)}>
          <Styled.Icon isActive={getActivePathIndex() === 2}>
            <Image src={semenIcon} alt="" width={25} height={25} />
          </Styled.Icon>
          {getActivePathIndex() === 2 && <p>น้ำเชื้อ</p>}
        </Styled.LinkButton>

        <Styled.Indicator activeIndex={getActivePathIndex()} />
      </Styled.ButtonWrapper>
    </Styled.Container>
  )
}

export default Navbar
