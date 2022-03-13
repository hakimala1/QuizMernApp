import React, { useEffect, useState } from 'react'
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createQuestion, getQuestion } from '../../redux/actions/quizActions'
import { useNavigate } from "react-router-dom";
import "./Quiz.css"

function AddQuiz() {
    const [question, setQuestion] = useState('')
    const [A, setA] = useState('')
    const [B, setB] = useState('')
    const [C, setC] = useState('')
    const [D, setD] = useState('')
    const [correct, setCorrect] = useState('')
    const [nameQuiz, setNameQuiz] = useState('')
    const [groupe, setGroupe] = useState('')
    const [toggle, setToggle] = useState(false)
    // console.log(nameQuiz)
    const answers = [A, B, C, D]
    const questions = useSelector(state => state.quizReducer.questions)
    // console.log(questions)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(createQuestion({ nameQuiz, question, answers, correct, groupe }))
        setQuestion("")
        setA('')
        setB('')
        setC('')
        setD('')
        setCorrect('')
        
    }

    useEffect(() => {
        dispatch(getQuestion())

    }, [questions])



    return (
        <div>
            {!toggle ?
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name Of Quiz</Form.Label>
                        <Form.Control type="text" placeholder="Enter your question" value={nameQuiz} onChange={(e) => setNameQuiz(e.target.value)} />

                    </Form.Group>
                    <select id="lang" name="groupe" value={groupe} onChange={(e) => setGroupe(e.target.value)} class="form-select" aria-label="Default select example" >
                        <option >Selectionner un groupe </option>

                        <option value="G1">Groupe 1</option>
                        <option value="G2">Groupe 2 </option>
                        <option value="G3">Groupe 3</option>
                    </select>
                    <Button variant="warning" onClick={() => setToggle(true)}>Commencer</Button>
                </div>
                :

                <div className='row'>
                    <div className='col'>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Question</Form.Label>
                                <Form.Control type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Answer 1</Form.Label>
                                <Form.Control type="text" className='res' value={A} onChange={(e) => setA(e.target.value)} />
                                <Form.Label>Answer 2</Form.Label>
                                <Form.Control type="text" className='res' value={B} onChange={(e) => setB(e.target.value)} />
                                <Form.Label>Answer 3</Form.Label>
                                <Form.Control type="text" className='res' value={C} onChange={(e) => setC(e.target.value)} />
                                <Form.Label>Answer 4</Form.Label>
                                <Form.Control type="text" className='res' value={D} onChange={(e) => setD(e.target.value)} />
                                <Form.Label>Correct answer</Form.Label>
                                <Form.Control type="text" className='res' value={correct} onChange={(e) => setCorrect(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleCreate}>
                                Submit
                            </Button>

                        </Form>

                    </div>
                    <div className='col'>
                        <Form.Label>{nameQuiz}</Form.Label>

                        <ListGroup>
                            {questions && questions.map((el, i) => el.nameQuiz === nameQuiz && <ListGroup.Item key={i}>- {el.question}</ListGroup.Item>)}

                        </ListGroup>

                        <Button variant="success" onClick={() => {setToggle(true);navigate('/Profile')}}>Terminer</Button>
                    </div>
                </div>
            }



        </div>
    )
}

export default AddQuiz