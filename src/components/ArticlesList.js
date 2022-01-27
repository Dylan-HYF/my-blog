import React from "react";
import { Link } from 'react-router-dom'


const ArticlesList = ({ articles }) => (
  <>
    {articles.map((x, i) => (
      <Link className="article-list-item" to={`/article/${x.name}`} key={i}>
        <h3>{x.title}</h3>
        {/* first 150 characters */}
        <p>{x.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
)
export default ArticlesList