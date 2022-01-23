import Image from 'next/image'
import React, { FC } from 'react'
import { ISetState } from '../../util/types'
import * as Styled from './styled'
import dashboardIcon from '../../public/icons/dashboard.svg'
import semenIcon from '../../public/icons/semen.svg'
import cattleIcon from '../../public/icons/cattle.svg'
interface IProps {}
const Card: FC<IProps> = () => {
  return (
    <Styled.Container>
      <Styled.LinkButton>
        <Image src={dashboardIcon} alt='dashboard' width={25} height={25} />
        <p>สรุป</p>
      </Styled.LinkButton>
      <Styled.LinkButton>
        <Image src={cattleIcon} alt='cow' width={25} height={25} />
        <p>วัว</p>
      </Styled.LinkButton>
      <Styled.LinkButton>
        <Image src={semenIcon} alt='semen' width={25} height={25} />
        <p>น้ำเชื้อ</p>
      </Styled.LinkButton>
    </Styled.Container>
  )
}

export default Card
