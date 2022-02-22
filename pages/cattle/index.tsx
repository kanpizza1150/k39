import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { ICattleListAxios, IPageProps } from '../../util/types'
import axiosApiRequest, { EnumRequestMethod } from '../../util/axios'
import CattleList from '../../container/cattle'
interface ICattleProps extends IPageProps {
  cattleList: ICattleListAxios
  err?: any
}
const Cattle: NextPage = ({
  cattleList,
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <CattleList cattleList={cattleList} />
    </>
  )
}

export default Cattle

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: ICattleProps
  notFound: boolean
  err?: any
}> => {
  const cattleList: ICattleListAxios = await axiosApiRequest(
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
