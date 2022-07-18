import React from 'react'
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

type Article = {
  userId: number,
  id: number,
  title: string,
  body: string
}

type Props = {

  article: Article

}

const ArticleCard = (props: Props) => {
  return (
    <div>
      <Link href="/article/[id]" as = {`/article/${props.article.id}`}>
        <div className={articleStyles.card}>
        <a><h2>{props.article.title} &rarr;</h2>
        <p>{props.article.body}</p>
        </a>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
