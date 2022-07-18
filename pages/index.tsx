import type { NextPage,GetStaticProps, GetStaticPropsResult } from 'next'
import {server} from '../config'
import Head from 'next/head'
import React, { useContext } from 'react'
import ArticleList from '../components/ArticleList'
type Article = {
  userId: number,
  id: number,
  title: string,
  body: string
}
type HomeProps = {
articles: Article[]
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const Articles = React.createContext<Article[]>(props.articles)
  return (
    <div >
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, web blogs, programming'/>
      </Head>
     <ArticleList articles={props.articles} />
    </div>
  )
}


interface Props {
  articles: Article[]
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {

  const res = await fetch(`${server}/api/article`);

  const articles = await res.json()
  return {
    props: {
      articles
    }
  }

}

export default Home
