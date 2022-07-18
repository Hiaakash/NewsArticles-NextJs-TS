import React from 'react'

import articleStyles from '../styles/Article.module.css'
import ArticleCard from './ArticleCard'
export type Article = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type Props = {
  articles: Article[]
}

const ArticleList = (props: Props) => {
  return (
    <div className={articleStyles.grid}>
    {props?.articles.map((article,index) =>(
      <ArticleCard key={index} article={article} />
    )
    )}
    </div>
  )
}

export default ArticleList
