import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import { useEffect, useState } from 'react';
import EditPost from './EditPost';
import Layout from './Layout';
import About from './About';
import api from './api/posts';
import { format } from 'date-fns';

function App() {

  const[posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [bodyArea, setBodyArea] = useState('')
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody,setEditBody] = useState('')
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchApi= async()=>{
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }
      catch(err){
        if(err.response){
        console.log(err.response.status)
        }
        else{
          console.log(`Error:${err.message}`)
        }
      }
    }
    fetchApi();
  }, [])

  useEffect(()=>{
    const filteredResults = posts.filter((post)=> ((post.body).toLowerCase().includes(search.toLowerCase()))
    || ((post.title).toLowerCase().includes(search.toLowerCase())))
    if(filteredResults) setSearchResult(filteredResults.sort((a,b) => a>b))
  },[posts, search])

const newPostSubmit=async(e)=>{
 e.preventDefault()
  const id = posts.length ? posts[posts.length-1].id+1 : 1
  const datetime = format(new Date(), 'MMMM dd, yyyy pp')
  const newPost = { id, title: title, datetime, body:bodyArea };
  try{
  const response = await api.post('/posts', newPost)
  setPosts([...posts, response.data]) 
  setTitle('')
  setBodyArea('')
  navigate('/')}
    catch(err){
      console.log(`Error:${err.message}`)
    }
}

const editPostSubmit=async(id)=>{
  const datetime = format(new Date(), 'MMMM dd, yyyy pp')
  const editedPost = {id, title: editTitle, datetime, body:editBody}
  try{
    const response = await api.patch(`/posts/${id}`, editedPost)
    setPosts(posts.map((post)=> post.id===id ? response.data : post))
    setEditTitle('');
    setEditBody('');
    navigate('/')
  }
  catch(err){
    console.log(`Error:${err.message}`)
  }
 
  }

const onClickDelete=async(id)=>{
  const newPosts = posts.filter((post)=>(post.id !== id))
  try{  
    await api.delete(`/posts/${id}`)
    setPosts(newPosts)
    navigate('/')}
  catch(err){
    console.log(`Error:${err.message}`)
  }

  }

  return (
  
<Routes>
  <Route path="/" element={<Layout search={search} setSearch={setSearch}/>}>
  <Route index element={<Home posts={searchResult}/>}/>
  <Route path="post">
    <Route index element={
    <NewPost
    newPostSubmit={newPostSubmit}
    title={title}
    setTitle={setTitle}
    bodyArea={bodyArea}
    setBodyArea={setBodyArea}/>}/>
   <Route path=":id" element={
   <PostPage posts={posts}
    onClickDelete={onClickDelete}
    />}
    />
      
  <Route path="edit">
    <Route path=':id'
    element={<EditPost 
  posts={posts}
  editBody={editBody} 
  editTitle={editTitle} 
  setEditBody={setEditBody}
  setEditTitle={setEditTitle}
  editPostSubmit={editPostSubmit}/>}/>
  </Route>
  </Route>

  <Route path="about" element={<About/>}/>
  <Route path="*" element={<Missing/>}/>
</Route>
</Routes>
  );
}



export default App;
