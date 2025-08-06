import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className='posts'>
                <div className='post'>
                    <div className='img'>
                        <img src='' alt=''/>
                    </div>
                    <div className='content'>
                        <Link className='link' to="/post/:id">
                            <h1>Title</h1>
                        </Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
