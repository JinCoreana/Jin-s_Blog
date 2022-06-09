import React from 'react'

const NewPost = ({title, setTitle, setBodyArea, bodyArea, newPostSubmit}) => {
  return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={newPostSubmit}>
            <label htmlFor='title'>Title:</label>
            <input
            id='postTitle'
            required 
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor='body'>Post:</label>
            <textarea
            id='postBody'
            required
            value={bodyArea}
            onChange={(e)=>{setBodyArea(e.target.value)}}/>
            <button type='submit'>Submit</button>
        </form>
    </main>
    )
}

export default NewPost