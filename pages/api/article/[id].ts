import {articles} from '../../../data'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}
type Error = {
  message: string;
}
export default function handler (req: NextApiRequest,
  res: NextApiResponse<Data | Error>) {
  const {id} = req.query
  const filtered = articles.filter(article => article.id === id)
  if(filtered.length > 0 ){
    res.status(200).json(filtered[0])
  }else{
    res.status(404).json({message: `Article with the id of ${id} is not found`})
  }
}
