import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
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
            await axios.post("/auth/register", inputs);
            navigate("/login")
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input type="text" name="username" placeholder="User Name" onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
                <button onClick={handleSubmit}>Register</button>
                {error && <p>error</p>}
                <span>Do you have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register
