import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../util/connection'
import apiHandler, { handleCatch } from '../../../util/handler'
import { ResponseFuncs } from '../../../util/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const catcher = (error: Error) => handleCatch(res, error)
  const { body, query } = req
  const { id } = query
  const handleCase: ResponseFuncs = {
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Semen } = await dbConnect()
      res.json(
        await Semen.findOneAndUpdate({ _id: id }, body, {
          upsert: true,
        }).catch(catcher)
      )
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Semen } = await dbConnect()
      res.json(await Semen.deleteOne({ _id: id }).catch(catcher))
    },
  }

  apiHandler(req, res, handleCase)
}
export default handler
