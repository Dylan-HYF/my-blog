import React, { useState } from "react";
const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('')
  const [commentText, setCommentText] = useState('')
  const addComment = async () => {
    const res = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'POST',
      // make this obj a json string
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        // set headers like this when you send json
        'Content-Type': 'application/json'
      }
    })
    const body = await res.json()

    setArticleInfo(body)
    console.log(body)
    setUsername('')
    setCommentText('')
  }
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Comment:
        <textarea rows="4" cols="50" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
      </label>
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  )
}

export default AddCommentForm