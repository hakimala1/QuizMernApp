import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/actions/authActions';

function EditProfile({ id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()


  const user = useSelector(state => state.authReducer.user)
  const [username, setUsername] = useState(user.username)
  const [age, setAge] = useState(user.age)
  const [imageUrl, setImage] = useState(null)

  const handleUpdate = (e) => {

    dispatch(updateProfile(user._id, { username, age, imageUrl }))

  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3 form-control" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

          </Form.Group>
          <Form.Group className="mb-3 form-control" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" name="imageUrl" onChange={(e) => setImage(e.target.files[0])} />

          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleUpdate(); handleClose() }}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
}

export default EditProfile