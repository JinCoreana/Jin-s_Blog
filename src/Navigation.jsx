import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({search, setSearch}) => {
  return (
     <nav className='Nav'>
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor='search_bar'>search bar</label>
    <input 
    id="search"
    type="text"
    placeholder='Search posts'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
/>
    </form>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="post">Posts</Link></li>
        <li><Link to="about">About Jin</Link></li>
    </ul>


    </nav>
  )
}

export default Navigation