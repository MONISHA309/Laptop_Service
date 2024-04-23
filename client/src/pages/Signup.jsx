import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();


        const nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (3-20 characters, alphanumeric or underscore only)');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('Please enter a valid password (at least 8 characters, including uppercase, lowercase, and digits)');
            return;
        }


        axios.post('https://laptop-service-backend.onrender.com/sign',{name,email,password})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    };

    return (
            <div id="signin-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>

                    {/* user name */}
                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>


                    {/* email */}
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}/>


                    {/* password */}
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>


                    {/* <input type="submit" value="Signup" /> */}
                    <button type="submit">Signup</button>

                </form>
                <p>Already have an Account?  <Link to="/">Login</Link></p>
                    
                
            </div>
    );
}

export default Signup;
