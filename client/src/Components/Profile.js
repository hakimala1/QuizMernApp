import React from 'react';
import {  useSelector } from 'react-redux';
import '../App.css'
import Admin from './Admin';
import Formateur from './Formateur/Formateur';
import User from './User'

function Profile() {
  
  const {user,loading} = useSelector(state=>state.authReducer)

// console.log(user)

  return <div className='mg'>
    {loading ? <h1>Wait...</h1>:(user && user.role ==='admin') ? <Admin/> :(user&& user.role ==='formateur') ? <Formateur></Formateur> :<User></User>}
  
  </div>;
}

export default Profile;
