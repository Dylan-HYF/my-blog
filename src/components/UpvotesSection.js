import React from "react";
const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const res = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'POST'
    })
    const body = await res.json()
    setArticleInfo(body)
  }
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>Add Upvote</button>
      <p>{upvotes} upvotes</p>
    </div>
  )
}

export default UpvotesSection
