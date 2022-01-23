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
import Cattle from '../container/cattle'
interface IPizzasProps extends IPageProps {
  pizzaList: IAxiosResponse
}
const Pizzas: NextPage = ({
  pizzaList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Cattle />
}

export default Pizzas

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: IPizzasProps
  notFound: boolean
}> => {
  const pizzaList: IAxiosResponse = await axiosApiRequest(
    EnumRequestMethod.GET,
    '/products'
  )

  return {
    props: {
      pizzaList,
      header: { title: 'Our Pizza' },
    },
    notFound: pizzaList.error,
  }
}
