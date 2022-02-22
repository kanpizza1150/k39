import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { ICattleDetailAxios, IPageProps } from '../../util/types'
import axiosApiRequest, { EnumRequestMethod } from '../../util/axios'
import CattleDetail from '../../container/cattleDetail'

interface ICattleProps extends IPageProps {
  cattleDetail: ICattleDetailAxios
}
const Cattle: NextPage = ({
  cattleDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CattleDetail cattleDetail={cattleDetail} />
}

export default Cattle

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{
  props: ICattleProps
  notFound: boolean
}> => {
  const { id } = context.query

  const cattleDetail: ICattleDetailAxios = await axiosApiRequest(
    EnumRequestMethod.GET,
    `/cattle/${id}`
  )
  return {
    props: {
      cattleDetail,
      header: { title: `Cattle | ${cattleDetail.data.name}` },
    },
    notFound: cattleDetail.error,
  }
}
