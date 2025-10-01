import React, { useEffect } from 'react'
import PostImage from "../../images/post.png"
import axios from 'axios'

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch () {
        console.log(err)
      }
    }

    fetchData()
  }, [cat])

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
