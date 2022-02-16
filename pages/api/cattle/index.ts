import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../util/connection'
import apiHandler, { handleCatch } from '../../../util/handler'
import { ResponseFuncs } from '../../../util/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const catcher = (error: Error) => handleCatch(res, error)
  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      console.log('await Cattle.find({}', await Cattle.find({}))
      res.json(await Cattle.find({}).catch(catcher))
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Cattle } = await dbConnect()
      res.json(await Cattle.create(req.body).catch(catcher))
    },
  }
  apiHandler(req, res, handleCase)
}
export default handler

// {
//   pregnancy: { status: 4, history: [] },
//   rut: [],
//   _id: '61ee6dd06db109d2922d547b',
//   name: 'YK2/59',
//   nickname: 'แม่มีนา',
//   img: [],
//   dob: '14-03-2016',
//   pregnency: { date: '23-01-2022', semen: [Object], status: 2 },
//   createdAt: '2022-01-24T09:13:52.736Z',
//   updatedAt: '2022-02-16T10:36:13.632Z',
//   __v: 0,
//   dam: 'LAMPHYAKLANG 73/54',
//   sire: 'YK2/55'
// },
