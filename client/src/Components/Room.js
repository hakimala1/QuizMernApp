import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addQuiz, updateProfile, updateUser } from '../redux/actions/authActions'
import { getQuestion } from '../redux/actions/quizActions'
import "./classRoom.css"

function Room() {
    const list = useSelector(state => state.quizReducer.questions)
    const user = useSelector(state => state.authReducer.user)
    const questions = list.filter(el => el.nameQuiz === "Quiz app")

    // console.log(questions && questions[0].correct)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuestion())

    }, [])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const quiz = {nameQuiz : "Quiz Final", result:score}

    const handleAnswerOptionClick = (x, y) => {
        if (x === y) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            
        }
    };
    return (
        <>
            <br />
            <br /><br />
            <br />
            <h1>Quiz</h1>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                        <Button variant="primary" onClick={() => {dispatch(addQuiz(user._id, {quiz})) }}>
                            Save
                        </Button>
                    </div>
                ) : (

                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion]?.question}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion]?.answers.map((answerOption, i) => (
                                <button key={i} onClick={() => handleAnswerOptionClick(answerOption, questions[currentQuestion]?.correct)}>{answerOption}</button>
                            ))}
                        </div>
                    </>




                )}

            </div>
        </>
    );
}

export default Room