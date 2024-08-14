import React, { useState } from 'react'
import '../css/login.css'; 
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = (e) => {
      e.preventDefault();


      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
      }

      if (!passwordRegex.test(password)) {
          alert('Please enter a valid password (at least 8 characters, including uppercase, lowercase, and digits)');
          return;
      }


      axios.post('https://laptop-service-backend.onrender.com/login',{email,password})
      .then(result => {
          console.log(result)
          if(result.data === "success"){
            navigate('/')
          }
          else{
            alert("No Record Exist.Please Signup")
          }
      })
      .catch(err => console.log(err))

  };


  return (
        <div id="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          {/* email */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)}/>   
          {/* e - event object which contains the info about the event */}
          {/* e.target.value contains the current value */}
          {/* setEmail function set the current value to the variable Email , whenever a user types in the email input field, the setEmail function is called, updating the email state variable with the latest value from the input field. */}


          {/* password */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>


          <a href="">Forgot password</a><br /><br />


          <button type="submit">Login</button>

        </form>

        <p>Don't have an account?  <Link to="/sign">Sign Up</Link></p>
        
        
      </div>
  )
}

export default Login