import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  signin, signup } from '../../redux/actions/authActions';
import './Signup.css'

function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const role = 'user'

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSignUp = (e) => {
    e.preventDefault()
    dispatch(signup({ email, password, role }, navigate))
    
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(signin({ email, password }, navigate))
  }




  return (
    <div className='body'>
      <div className="main">
        <input type="checkbox" id="chk" />
        <div className="signup">
          <form>
            <label htmlFor="chk" className="sig">Sign up</label>
         
            <div className="user-box">
              <input type="text" onChange={(e) => setEmail(e.target.value)} title="Enter email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" onChange={(e) => setPassword(e.target.value)} title="Enter password" required />
              <label>Password</label>
            </div>
            <button onClick={handleSignUp}>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" className="log">Login</label>
            <div className="user-box">
              <input type="text" onChange={(e) => setEmail(e.target.value)} title="Enter Email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" onChange={(e) => setPassword(e.target.value)} title="Enter password" required />
              <label>Password</label>
            </div>
            <button onClick={handleSignIn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
