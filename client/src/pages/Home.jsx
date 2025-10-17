import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { axios } from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])

    const category  = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`posts${category}`)
                setPosts(result.data)
            } catch (err) {

            }
        }
        fetchData()
    }, [category])

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post'>
                        <div className='img' key={post.id}>
                            <img src={`../upload/${post.img}`} alt=''/>
                        </div>
                        <div className='content'>
                            <Link className='link' to="/post/:id">
                                <h1>{getText(post.title)}</h1>
                            </Link>
                            <p>{getText(post.description)}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
