import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'

import Semen from '../container/semen'
import axiosApiRequest, { EnumRequestMethod } from '../util/axios'
import { IPageProps, ISemenListAxios } from '../util/types'
export interface ISemenProps extends IPageProps {
  semenList: ISemenListAxios
}
const SemenPage: NextPage = ({
  semenList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Semen semenList={semenList} />
}

export default SemenPage
export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: ISemenProps
  notFound: boolean
}> => {
  const semenList: ISemenListAxios = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/semens'
  )
  return {
    props: {
      semenList,
      header: { title: 'Semen' },
    },
    notFound: semenList.error,
  }
}
