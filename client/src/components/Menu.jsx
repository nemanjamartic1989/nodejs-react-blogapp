import React from 'react'
import PostImage from "../../images/post.png"

const Menu = () => {
  return (
    <div className='menu'>
        <h1>Other posts</h1>
        <div className='post'>
            <img src={PostImage} alt="" />
            <h2>Post Title</h2>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Menu
