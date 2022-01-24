import Image from 'next/image'
import React, { FC, useState } from 'react'
import { IAxiosResponse } from '../../util/axios'
import { ISemen } from '../../util/types'
import * as Styled from './styed'
interface IProps {
  semenList: IAxiosResponse
}
enum IFilter {
  ALL = 'all',
  SEXED = 1,
  REGULAR = 0,
}
const Semen: FC<IProps> = ({ semenList }: IProps) => {
  const [filter, setFilter] = useState<IFilter>(IFilter.ALL)
  const [filteredSemenList, setFilteredSemenList] = useState<Array<ISemen>>(
    semenList.data
  )

  const filterList: Array<{ label: string; value: IFilter }> = [
    {
      label: 'ทั้งหมด',
      value: IFilter.ALL,
    },
    {
      label: 'แยกเพศ',
      value: IFilter.SEXED,
    },
    {
      label: 'รวมเพศ',
      value: IFilter.REGULAR,
    },
  ]
  const handleFilter = (val: IFilter) => {
    setFilter(val)
    let filtered: Array<ISemen> = semenList.data
    if (val !== 'all') {
      filtered = semenList.data.filter((semen: ISemen) => semen.type === val)
    }
    setFilteredSemenList(filtered)
  }
  return (
    <Styled.Container>
      <h1>น้ำเชื้อ</h1>
      <Styled.FilterButtonWrapper>
        {filterList.map((filter: { label: string; value: IFilter }) => (
          <Styled.FilterButton
            key={filter.value}
            onClick={() => handleFilter(filter.value)}
          >
            {filter.label}
          </Styled.FilterButton>
        ))}
      </Styled.FilterButtonWrapper>
      {filteredSemenList.map((semen: ISemen) => (
        <Styled.Card key={semen._id}>
          <Image
            src={semen?.img || ''}
            alt={semen.title}
            width={680}
            height={400}
            layout='responsive'
            loading='lazy'
          />
          <Styled.Content>
            <Styled.Title>{semen._id}</Styled.Title>
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
