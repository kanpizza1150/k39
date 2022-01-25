import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { IPageProps, ISemenListAxios } from '../util/types'
import axiosApiRequest, { EnumRequestMethod } from '../util/axios'
import Semen from '../container/semen'
interface ISemensProps extends IPageProps {
  semenList: ISemenListAxios
}
const Semens: NextPage = ({
  semenList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Semen semenList={semenList} />
}

export default Semens

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: ISemensProps
  notFound: boolean
}> => {
  const semenList: ISemenListAxios = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/semens'
  )

  return {
    props: {
      semenList,
      header: { title: 'Our Semen' },
    },
    notFound: semenList.error,
  }
}
