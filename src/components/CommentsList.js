import React from "react";
// console.log(comments)

// {comments} is from props, 是解构赋值，只要comments这个值, 也可以传一个props然后props.comments
const CommentsList = (props) => {
  console.log(1, props.comments)

  return (
    <>
      <h3>Comments:</h3>
      {props.comments.map((x, i) => (
        <div key={i} className="comment">
          <h4>{x.username}</h4>
          <p>{x.text}</p>
        </div>
      ))}
    </>
  )
}

export default CommentsList