import React from 'react'
import { Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import '../Admin/Profile.css'
import EditProfile from '../EditProfile'




export default function Formateur() {
  const user = useSelector(state => state.authReducer.user)
  const userId=user._id

  console.log(userId)

  return (
    <div className='profile'>

      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Img variant="top" src={user.imageUrl ? `uploads/${user.imageUrl}` :"https://images.assetsdelivery.com/compings_v2/kritchanut/kritchanut1407/kritchanut140700320.jpg"} />
        <Card.Body>
          <Card.Title>
           Username :  {user && user.username}
            </Card.Title>
          <Card.Text>
            Email :{user && user.email}
          </Card.Text>
          <Card.Text>
           Age :  {user && user.age}
          </Card.Text>



        <EditProfile ></EditProfile>
      </Card.Body>
      {/* <Button variant="primary" onClick={handleProfile}>
            add profile
          </Button> */}
    </Card>
    </div >
  )
}
