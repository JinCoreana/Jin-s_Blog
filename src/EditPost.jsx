import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditPost = ({posts, editTitle, setEditTitle, editBody, setEditBody, editPostSubmit}) => {
    const {id}= useParams()
    const post = posts.find((post)=> (post.id).toString()===id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    return (
    <main className='NewPost'>
            {editTitle &&
            <>
    <h2>Edit Post</h2>
    <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='title'>Title:</label>
        <input
        id='postTitle'
        required 
        type='text'
        placeholder='Title'
        value={editTitle}
        onChange={(e)=>setEditTitle(e.target.value)}/>   
        <label htmlFor='postBody'>Post:</label>
        <textarea
        id='postBody'
        required
        value={editBody}
        onChange={(e)=>setEditBody(e.target.value)}/>
        <button onClick={()=>editPostSubmit(post.id)} type='submit'>Submit</button>
    </form>
    </>}
    {!editTitle &&   
    <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Go back to main page</Link>
                    </p>
                </>}
</main>
  )
}

export default EditPost