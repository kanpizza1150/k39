import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../../util/connection'
import apiHandler, { getMethod, handleCatch } from '../../../../util/handler'
import { ResponseFuncs } from '../../../../util/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const catcher = (error: Error) => handleCatch(res, error)
  const { body, query } = req
  const { id } = query
  const handleCase: ResponseFuncs = {
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      res.json(
        await Cattle.findOneAndUpdate(
          { _id: id },
          { $push: { 'pregnancy.history': body } },
          {
            upsert: true,
          }
        ).catch(catcher)
      )
    },
  }

  apiHandler(req, res, handleCase)
}
export default handler
