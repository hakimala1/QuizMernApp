import React, { useState } from 'react'
import { Button, Card, Dropdown, ListGroup, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, updateUser } from '../../redux/actions/authActions'

function Carte({ el }) {

    const [formData, setFormData] = useState({ formateur: "", groupe: "", formation: "" })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
 


    // console.log(selects)
    const dispatch = useDispatch()

    const handleDelete = () => {
        if (window.confirm('Are you sure')) { dispatch(removeUser(el._id)) }
    }
    const users = useSelector(state => state.authReducer.liste)

    const handleUpdate = (e) => {

        dispatch(updateUser(el._id, formData))

    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {el.role === "user" ?
                <Card style={{ width: '18rem' }}>
                    <Card.Header></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Username : {el.username}</ListGroup.Item>
                        <ListGroup.Item>Formation : {el.formation}</ListGroup.Item>
                
                    </ListGroup>

                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    <Button variant="success" onClick={handleShow}>
                        Update
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Affectation Etudiant</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"  >
                                    Formateur
                                </Dropdown.Toggle>

                                <Dropdown.Menu  value={formData.formateur} onChange={handleChange}>

                                    {users && users.map(
                                        el => el.role === 'formateur' &&
                                            <Dropdown.Item value='alaaa' >{el.email}</Dropdown.Item>)}

                                </Dropdown.Menu>
                            </Dropdown> */}

                            <select id="lang" name="formateur" value={formData.formateur} onChange={handleChange} >
                                <option >Selectionner un formateur </option>
                                {users && users.map(
                                    el => el.role === 'formateur' &&
                                        <option value={el.email}>{el.email}</option>)}


                            </select>

                        </Modal.Body>
                        <Modal.Body>
                            <select id="lang" name="groupe" value={formData.groupe} onChange={handleChange} >
                            <option >Selectionner un groupe </option>

                                <option value="G1">Groupe 1</option>
                                <option value="G2">Groupe 2 </option>
                                <option value="G3">Groupe 3</option>
                            </select>


                        </Modal.Body>
                        <Modal.Body>
                            <select id="lang" name="formation" value={formData.formation} onChange={handleChange} >
                            <option >Selectionner un formation </option>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend </option>
                            </select>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
                :
                <Card style={{ width: '18rem' }}>
                    <Card.Header></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Email : {el.email}</ListGroup.Item>
                        <ListGroup.Item>Role: {el.role}</ListGroup.Item>
                    </ListGroup>

                    <Button variant="danger" onClick={handleDelete}>Delete</Button>


                </Card>

            }

        </div>
    )
}

export default Carte


