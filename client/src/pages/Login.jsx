import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post("/auth/login", inputs);
            navigate("/")
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" name="username" placeholder="User Name" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
                <button onClick={handleSubmit}>Login</button>
                {error && <p>error</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
