import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseFuncs } from './types'

export const getMethod: (req: NextApiRequest) => keyof ResponseFuncs = (
  req
) => {
  return req.method as keyof ResponseFuncs
}
export const handleCatch: (res: NextApiResponse, error: Error) => void = (
  res: NextApiResponse,
  error: Error
): void => {
  console.log('error:>>', error)
  return res.status(400).json({ error })
}

const apiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  handleCase: any
) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export default apiHandler
