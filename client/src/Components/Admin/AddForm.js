import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addFormateur } from '../../redux/actions/authActions'
import './Add.css'

function AddForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const role = 'formateur'
    const navigate = useNavigate()


    const dispatch = useDispatch()
    const handleSignUp = (e) => {
      e.preventDefault()
      dispatch(addFormateur({ email, password,role }, navigate))
    }
    return (
        <div className='addF'>
            <h1>Ajouter un Formateur</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                
                <Button variant="primary" type="submit" onClick={handleSignUp}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddForm