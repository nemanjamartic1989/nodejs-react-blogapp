import React, { useContext, useEffect } from 'react'
import UserImage from "../../images/user.png"
import PostImage from "../../images/post.png"
import EditImage from "../../images/edit.png"
import DeleteImage from "../../images/delete.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'

const Single = () => {
    const [post, setPost] = useState({})

    const location  = useLocation()
    const navigate = useNavigate()
    const postId = location.pathname.split("/")[2]
    const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`posts/${postId}`)
                setPost(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [postId])

    const handleDelete = async () => {
        try {
            await axios.delete(`posts/${postId}`)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='single'>
            <div className='content'>
                <img src={PostImage} alt=""/>
                <div className='user'>
                    <img src={post?.userImg} alt=""/>
                    <div className='info'>
                        <span>post.username</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className='edit'>
                            <Link to={`write?edit=1`}>
                                <img src={EditImage} alt=""/>
                            </Link>
                            <img onClick={handleDelete} src={DeleteImage} alt=""/>
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                {post.desc}
            </div>
            <Menu />
        </div>
    )
}

export default Single
