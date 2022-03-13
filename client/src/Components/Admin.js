
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/actions/authActions'
import './Admin/Profile.css'


function Admin() {
  const user = useSelector(state => state.authReducer.user)
  const [edit, setEdit] = useState(false)

  const [formData, setFormData] = useState({email:""})
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })  }
  const dispatch = useDispatch()
  const handleUpdate=(e)=>{
   
    dispatch(updateUser(user._id,formData))
 
}
useEffect(()=>{
    edit && setFormData({email:user.email})
    
},[])



  return (
    <div className='profile'>


      {!edit ?
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Card.Body>
            <Card.Title>{user && user.role}</Card.Title>
            <Card.Text>
              {user && user.email}
            </Card.Text>
            <Button variant="primary" onClick={() => { setEdit(true); console.log(edit) }}>Go somewhere</Button>
          </Card.Body>
        </Card>
        :
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}  />
     
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => { handleUpdate();setEdit(false)  }}>
            Edit
          </Button>
        </Form>
      }

    </div>
  )
}

export default Admin