import React from 'react'
import UserImage from "../../images/user.png"
import PostImage from "../../images/post.png"
import EditImage from "../../images/edit.png"
import DeleteImage from "../../images/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src={PostImage} alt=""/>
                <div className='user'>
                    <img src={UserImage} alt=""/>
                    <div className='info'>
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className='edit'>
                        <Link to={`write?edit=1`}>
                            <img src={EditImage} alt=""/>
                        </Link>
                        <img src={DeleteImage} alt=""/>
                    </div>
                </div>
                <h1>Lorem ipsum ...</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged.
                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                   and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <Menu />
        </div>
    )
}

export default Single
