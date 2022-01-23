import Image from 'next/image'
import React, { FC } from 'react'
import { IAxiosResponse } from '../../util/axios'
import { ISemen } from '../../util/types'
import * as Styled from './styed'
interface IProps {
  semenList: IAxiosResponse
}

const Semen: FC<IProps> = ({ semenList }: IProps) => {
  return (
    <Styled.Container>
      น้ำเชื้อ
      {semenList.data.map((semen: ISemen) => (
        <Styled.Card key={semen._id}>
          <Image
            src={`/api/imageproxy?url=${encodeURIComponent(semen?.img || '')}`}
            alt={semen.title}
            width={680}
            height={400}
            layout='responsive'
          />
          <Styled.Content>
            <Styled.Title>{semen.title}</Styled.Title>
            <Styled.Type type={semen.type}>
              <p>{semen.type > 0 ? 'แยกเเพศ' : 'รวมเพศ'}</p>
            </Styled.Type>
            <p>{semen.price.toLocaleString()} ฿/โดส</p>
            <p>{semen.stock} โดส</p>
            <p>ฝากไว้ที่ {semen.leaveAt}</p>
          </Styled.Content>
        </Styled.Card>
      ))}
    </Styled.Container>
  )
}

export default Semen
