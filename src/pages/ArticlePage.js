import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'
import NotFoundPage from './NotFoundPage'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'

const ArticlePage = () => {
  // 把对象里的name属性值解构出来
  const { name } = useParams()
  const article = articleContent.find(x => x.name === name)
  // 第一个是数据，第二个是更改数据的方法，useState里的参数是数据的初始值
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      console.log(body)
      setArticleInfo(body)
    }
    fetchData()
    // watch name, when name changes, call useEffect()
  }, [name])
  if (!article) return <NotFoundPage />
  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection articleName={articleInfo.name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {/* <p>{articleInfo.upvotes} upvotes</p> */}
      {article.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={articleContent.filter(x => x.name !== name)} />
    </>
  )
}

export default ArticlePage