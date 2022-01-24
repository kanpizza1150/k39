import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { IPageProps, IPizza, IPizzaOption } from '../util/types'
import axiosApiRequest, {
  EnumRequestMethod,
  IAxiosResponse,
} from '../util/axios'
import CattleContainer from '../container/cattle'
interface ICattleProps extends IPageProps {
  cattleList: IAxiosResponse
}
const Cattle: NextPage = ({
  cattleList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CattleContainer cattleList={cattleList} />
}

export default Cattle

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: ICattleProps
  notFound: boolean
}> => {
  const cattleList: IAxiosResponse = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/cattle'
  )

  return {
    props: {
      cattleList,
      header: { title: 'Our Cattle' },
    },
    notFound: cattleList.error,
  }
}
