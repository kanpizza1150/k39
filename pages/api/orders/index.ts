import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../util/connection'
import apiHandler, { handleCatch } from '../../../util/handler'
import { ResponseFuncs } from '../../../util/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const catcher = (error: Error) => handleCatch(res, error)
  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Order } = await dbConnect()
      res.json(await Order.find({}).catch(catcher))
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Order } = await dbConnect()
      res.json(await Order.create(req.body).catch(catcher))
    },
  }
  apiHandler(req, res, handleCase)
}
export default handler
