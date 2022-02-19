import { useEffect, useState } from 'react'
import axiosApiRequest, { EnumRequestMethod } from '../util/axios'

const useSemen = () => {
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [isError, setisError] = useState<boolean>(false)
  const [semenList, setSemenList] = useState([])

  useEffect(() => {
    getSemen()
  }, [])

  const getSemen = async () => {
    setisLoading(true)
    const { data, error } = await axiosApiRequest(
      EnumRequestMethod.GET,
      `/semens`
    )

    if (error) {
      setisError(true)
      setSemenList([])
    } else {
      setSemenList(data)
      setisError(false)
    }
    setisLoading(false)
  }
  return { isLoading, isError, semenList }
}

export default useSemen
