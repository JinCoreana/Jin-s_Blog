import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <div className='Header'>
    <h1>Jin's</h1>
    <Link to ='/'>
        <img src="/logo.png" alt="logo" style={{width:"90px", margin:'0px', pointer:'cursor'}} />
    </Link>
    <h1>Blog</h1>
    </div>
  )
}

export default Header