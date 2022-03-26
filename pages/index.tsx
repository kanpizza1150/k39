import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { IPageProps, ISemen, ISemenListAxios } from '../util/types'
import axiosApiRequest, { EnumRequestMethod } from '../util/axios'
import Dashboard from '../container/dashboard'
export interface IDashboardProps extends IPageProps {
  semen: {
    total: number
    totalSexedSemen: number
    totalNormalSemen: number
  }
}
const DashboardPage: NextPage = ({
  semen,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Dashboard semen={semen} />
}

export default DashboardPage

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: IDashboardProps
}> => {
  const semenList: ISemenListAxios = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/semens'
  )
  const totalSemen: number =
    semenList?.data?.reduce((acc: number, cur: ISemen) => acc + cur.stock, 0) ||
    0
  const totalSexedSemen: number =
    semenList?.data?.reduce((acc: number, cur: ISemen) => {
      if (cur.type === 1) {
        return acc + cur.stock
      }
      return acc
    }, 0) || 0

  return {
    props: {
      semen: {
        total: totalSemen,
        totalSexedSemen: totalSexedSemen,
        totalNormalSemen: totalSemen - totalSexedSemen,
      },
      header: { title: 'K39' },
    },
  }
}
