import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { IPageProps, IPizza, IPizzaOption, ISemen } from '../util/types'
import axiosApiRequest, {
  EnumRequestMethod,
  IAxiosResponse,
} from '../util/axios'
import Semen from '../container/semen'
import Dashboard from '../container/dashboard'
export interface IDashboardProps extends IPageProps {
  semen: {
    total: number
    totalSexedSemen: number
    totalNormalSemen: number
  }
}
const Semens: NextPage = ({
  semen,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Dashboard semen={semen} />
}

export default Semens

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: IDashboardProps
  notFound: boolean
}> => {
  const semenList: IAxiosResponse = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/semens'
  )
  const totalSemen: number = semenList.data.reduce(
    (acc: number, cur: ISemen) => acc + cur.stock,
    0
  )
  const totalSexedSemen: number = semenList.data.reduce(
    (acc: number, cur: ISemen) => {
      if (cur.type === 1) {
        return acc + cur.stock
      }
      return acc
    },
    0
  )

  return {
    props: {
      semen: {
        total: totalSemen,
        totalSexedSemen: totalSexedSemen,
        totalNormalSemen: totalSemen - totalSexedSemen,
      },
      header: { title: 'K39' },
    },
    notFound: semenList.error,
  }
}
