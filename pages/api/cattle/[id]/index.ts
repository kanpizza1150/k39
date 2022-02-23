import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../../util/connection'
import apiHandler, { handleCatch } from '../../../../util/handler'
import { ResponseFuncs } from '../../../../util/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const catcher = (error: Error) => handleCatch(res, error)
  const { body, query } = req
  const { id } = query
  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      res.json(await Cattle.findOne({ _id: id }).catch(catcher))
    },
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      res.json(
        await Cattle.findOneAndUpdate({ _id: id }, body, {
          upsert: true,
        }).catch(catcher)
      )
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      res.json(await Cattle.deleteOne({ _id: id }).catch(catcher))
    },
  }

  apiHandler(req, res, handleCase)
}
export default handler
