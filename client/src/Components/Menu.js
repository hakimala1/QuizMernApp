import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
import { logout } from '../redux/actions/authActions';

function Menu() {
    const auth = useSelector(state => state.authReducer.auth)
    const user = useSelector(state => state.authReducer.user)

    const token = localStorage.getItem('token')

    const dispatch = useDispatch()
    return <div>

        {auth && token && (user.role === "admin") ?
            <div>
                <Navbar className='bg' expand="lg" variant='dark' >
                    <Container fluid>
                        <Navbar.Brand href="#">Mern APP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/Profile/users">Users</Nav.Link>
                                <Nav.Link as={Link} to="/Profile/Add">Add Formateur</Nav.Link>
                                <Nav.Link as={Link} to="/Profile/Groupe">Create Groupe</Nav.Link>

                            </Nav>

                            <Form className="d-flex">
                                <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            :
            auth && token && (user.role === "formateur") ?
            <div>
                <Navbar className='bg' expand="lg" variant='dark' >
                    <Container fluid>
                        <Navbar.Brand href="#">Mern APP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/Profile/CreateQuiz">Create Quiz</Nav.Link>

                            </Nav>

                            <Form className="d-flex">
                                <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
            :
            auth && token && (user.role === "user") ?
            <div>
                <Navbar className='bg' expand="lg" variant='dark' >
                    <Container fluid>
                        <Navbar.Brand href="#">Mern APP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/Profile/Class">Classroom</Nav.Link>

                            </Nav>

                            <Form className="d-flex">
                                <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>

                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

            : 
            <Navbar className='bg' expand="lg" variant='dark' >
                <Container fluid>
                    <Navbar.Brand href="#">Mern APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                        </Nav>

                        <Form className="d-flex">
                            <Nav.Link as={Link} to="/SignUpIn">Connect</Nav.Link>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        }
    </div>;
}

export default Menu;
