import axiosApiRequest, { EnumRequestMethod } from '../util/axios'

export enum PregnancyStatus {
  'FAILED' = 0,
  'FIRST_PASSED' = 2,
  'SECOND_PASSED' = 3,
  'IDLE' = 4,
  'IN_PROGRESS' = 5,
}
const useCattle = (id: string) => {
  const getCattleDetail = async (id: string) => {
    const { data } = await axiosApiRequest(
      EnumRequestMethod.GET,
      `/cattle/${id}`
    )
    return data
  }
  const updatePregnencyHistory = async (status: PregnancyStatus) => {
    const { pregnancy } = await getCattleDetail(id)
    const param = {
      semen: pregnancy.semen,
      date: pregnancy.date,
      status,
    }
    const { data } = await axiosApiRequest(
      EnumRequestMethod.PUT,
      `/cattle/${id}/pregnencyHistory`,
      { data: param }
    )
    return data
  }
  const updatePregnency = async ({
    semen,
    date,
    status = PregnancyStatus.IDLE,
  }: {
    semen: { title: string; dose: number } | null
    date: string | null
    status?: PregnancyStatus
  }) => {
    const param = {
      semen,
      date,
      status,
    }
    const { data } = await axiosApiRequest(
      EnumRequestMethod.PUT,
      `/cattle/${id}/pregnancy`,
      { data: param }
    )
    return data
  }
  const updateRutDate = async (date: string) => {
    const { data } = await axiosApiRequest(
      EnumRequestMethod.PUT,
      `/cattle/${id}/rutDate`,
      { data: { date } }
    )
    return data
  }
  const updatePregnancyStatusOnly = async (status: PregnancyStatus) => {
    const { data } = await axiosApiRequest(
      EnumRequestMethod.PUT,
      `/cattle/${id}/pregnancyStatus`,
      { data: { status } }
    )
    return data
  }

  const updatePregnancyStatus = (
    status: PregnancyStatus,
    params?: {
      semen: { title: string; dose: number }
      date: string
      status?: PregnancyStatus
    }
  ) => {
    switch (status) {
      case PregnancyStatus.FAILED:
        updatePregnencyHistory(PregnancyStatus.FAILED)
        // updatePregnancyStatusOnly(PregnancyStatus.IDLE)
        updatePregnency({
          semen: null,
          date: null,
          status: PregnancyStatus.IDLE,
        })
        break
      case PregnancyStatus.FIRST_PASSED:
        updatePregnancyStatusOnly(PregnancyStatus.FIRST_PASSED)
        break
      case PregnancyStatus.SECOND_PASSED:
        updatePregnancyStatusOnly(PregnancyStatus.SECOND_PASSED)
        break
      case PregnancyStatus.IN_PROGRESS:
        if (params) {
          updatePregnency({
            semen: params.semen,
            date: params.date,
            status: params.status || PregnancyStatus.IN_PROGRESS,
          })
        }
        updatePregnancyStatusOnly(PregnancyStatus.IN_PROGRESS)
        break
    }
  }
  return { updateRutDate, updatePregnancyStatus }
}

export default useCattle
