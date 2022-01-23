import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = decodeURIComponent(req.query.url as string)
  const result: any = await fetch(url)
  const body = await result.body
  body.pipe(res)
}
export default handler
