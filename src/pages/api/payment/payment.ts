// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process'

type Data = {
  name: string
}

export default function pay(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('Something firts')

  console.log('req', env.API_KEY)
  res.status(200).json({ name: 'John Doe' })
}
