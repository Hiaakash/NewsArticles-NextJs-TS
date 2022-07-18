import {articles} from '../../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}[]
export default function handler (req: NextApiRequest,
  res: NextApiResponse<Data>) {
  res.status(200).json(articles)
}
