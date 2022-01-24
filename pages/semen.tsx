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
import Semen from '../container/semen'
interface ISemensProps extends IPageProps {
  semenList: IAxiosResponse
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
  const semenList: IAxiosResponse = await axiosApiRequest(
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
