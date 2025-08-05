import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="User Name" required/>
                <input type="password" placeholder="Password" required/>
                <button>Login</button>
                <span className='error-message'>This is an error</span>
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
