import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="User Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button>Register</button>
                <span className='error-message'>This is an error</span>
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register
