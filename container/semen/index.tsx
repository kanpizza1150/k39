import Image from 'next/image'
import React, { FC, useState } from 'react'
import { EnumSemenType } from '../../util/enums'
import { ISemen, ISemenListAxios } from '../../util/types'
import * as Styled from './styed'
interface IProps {
  semenList: ISemenListAxios
}

enum FilterListAll {
  ALL = 'all',
}
type IFilterList = FilterListAll | EnumSemenType

const Semen: FC<IProps> = ({ semenList }: IProps) => {
  const [filter, setFilter] = useState<IFilterList>(FilterListAll.ALL)
  const [filteredSemenList, setFilteredSemenList] = useState<Array<ISemen>>(
    semenList.data
  )

  const filterList: Array<{ label: string; value: IFilterList }> = [
    {
      label: 'ทั้งหมด',
      value: FilterListAll.ALL,
    },
    {
      label: 'แยกเพศ',
      value: EnumSemenType.SEXED,
    },
    {
      label: 'รวมเพศ',
      value: EnumSemenType.REGULAR,
    },
  ]
  const handleFilter = (val: IFilterList) => {
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
        {filterList.map((item: { label: string; value: IFilterList }) => (
          <Styled.FilterButton
            key={item.value}
            onClick={() => handleFilter(item.value)}
            isActive={item.value === filter}
          >
            {item.label}
          </Styled.FilterButton>
        ))}
      </Styled.FilterButtonWrapper>
      {filteredSemenList.map((semen: ISemen) => (
        <Styled.Card key={semen._id}>
          <Styled.ImageWrapper>
            <Image
              src={semen?.img || ''}
              alt={semen.title}
              layout='fill'
              loading='lazy'
            />
          </Styled.ImageWrapper>
          <Styled.ContentWrapper>
            <Styled.Content>
              <Styled.Title>{semen.title}</Styled.Title>
              <Styled.Type type={semen.type}>
                {semen.type > 0 ? 'แยกเเพศ' : 'รวมเพศ'}
              </Styled.Type>
              <Styled.DetailWrapper>
                <Styled.AmountWrapper>
                  <span>คงเหลือ</span>
                  {semen.stock}
                  <span>โดส</span>
                </Styled.AmountWrapper>{' '}
                <Styled.AmountWrapper>
                  <span>ราคา</span>
                  {semen.price.toLocaleString()}
                  <span>บาท/โดส</span>
                </Styled.AmountWrapper>
                <Styled.AmountWrapper>
                  <span>ฝากไว้ที่</span>
                  <p>{semen.leaveAt ?? '-'}</p>
                  <span />
                </Styled.AmountWrapper>
              </Styled.DetailWrapper>
            </Styled.Content>
          </Styled.ContentWrapper>
        </Styled.Card>
      ))}
    </Styled.Container>
  )
}

export default Semen
