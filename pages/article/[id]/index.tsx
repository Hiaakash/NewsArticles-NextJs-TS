import React from 'react'
import {useRouter} from 'next/router'
import {server} from '../../../config'
import { GetServerSidePropsResult,GetStaticPaths,GetStaticPathsResult,GetStaticPropsContext,
GetServerSidePropsContext,
GetStaticPropsResult} from 'next'
import { Article } from '../../../components/ArticleList'
import Link from 'next/link'

type Props = {
  article: Article
}

const CurrArticle = (props: Props) => {
  //can be used for fetch with useEffect
  const router = useRouter()
  return (
    <div><h1> Article {props.article.id}</h1>
    <div><h2>{props.article.title}</h2></div>
    <p>{props.article.body}</p>
    <Link href={'/'}><h3>Go Back</h3></Link>

    </div>
  )
}
// NextJs data fetching Methods
// getServerSideProps will fetch the data at the time of request.
// getStaticProps will fetch the data at build time.
// getStaticPaths will generate all the path with data.

// export async function getServerSideProps (context: GetServerSidePropsContext) : Promise<GetServerSidePropsResult<Props>> {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
//  const article = await res.json()

//  return {
//    props: {
//   article
//  }
// }
// }

type PathProps = {
      id: string
}[]

export async function getStaticProps (context: GetStaticPropsContext) : Promise<GetStaticPropsResult<Props>> {
  const res = await fetch(`${server}/api/article/${context.params?.id}`)
  const article = await res.json()

  return {
    props: {
   article
  }
 }
 }

 export async function getStaticPaths (context: GetStaticPropsContext) : Promise<GetStaticPathsResult<PathProps>> {
  const res = await fetch(`${server}/api/article`)
  const articles : Article[] = await res.json()

  const ids = articles.map(article => article.id)

  const paths = ids.map(id =>( {params : { id: id.toString()}}))

  return {
   paths,
   fallback: false
 }
 }

// export async function getStaticProps (context: GetStaticPropsContext) : Promise<GetStaticPropsResult<Props>> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
//   const article = await res.json()

//   return {
//     props: {
//    article
//   }
//  }
//  }

//  export async function getStaticPaths (context: GetStaticPropsContext) : Promise<GetStaticPathsResult<PathProps>> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles : Article[] = await res.json()

//   const ids = articles.map(article => article.id)

//   const paths = ids.map(id =>( {params : { id: id.toString()}}))

//   return {
//    paths,
//    fallback: false
//  }
//  }

export default CurrArticle
