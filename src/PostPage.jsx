import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts, onClickDelete}) => {
    const {id}= useParams()
    const post = posts.find((post)=> (post.id).toString()===id)
  return (
      <main className='PostPage'>
          <article className='post'>
              {post &&
              <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <button className='edit'><Link to={`../edit/${id}`}>Edit</Link></button>
              <button className='delete' onClick={()=>onClickDelete(post.id)}>Delete</button>
              </>}
          </article>
      </main>
  )
}

export default PostPage