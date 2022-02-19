import axios, { AxiosError, AxiosResponse } from 'axios'
export enum EnumRequestMethod {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
}
export interface IAxiosResponse {
  data: any
  loading: boolean
  error: boolean
}
const axiosApiRequest = async (
  method: EnumRequestMethod,
  path: string,
  config?: Record<string, any>
): Promise<IAxiosResponse> => {
  const { API_URL } = process.env
  let error: boolean = false
  let loading: boolean = true
  let response: AxiosResponse['data']
  await axios({
    method: method,
    url: `${API_URL}${path}`,
    headers: {
      Authorization: 'xxx',
    },
    ...config,
  })
    .then((res: AxiosResponse) => {
      response = res.data
      loading = false
    })
    .catch((err: AxiosError) => {
      console.log('=====================err', err)
      error = true
      loading = false
    })

  return { data: response, loading, error }
}

export default axiosApiRequest
