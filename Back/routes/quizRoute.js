const express = require("express")
const QuizSchema = require("../models/quiz")
const quizRout = express.Router()

quizRout.post('/createQuestion', async (req, res) => {
    const { nameQuiz, question, answers, correct,groupe } = req.body
    try {
        const quiz = new QuizSchema({nameQuiz, question, answers, correct, groupe})
        // console.log(quiz)
        await quiz.save()

        res.status(200).send({ msg: 'quiz added successed', quiz })

    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'could not add quiz',error }] })

    }
})

quizRout.get('/questions',  async(req,res)=>{
    
    try {
        const questions=await QuizSchema.find()
        res.send(questions)
        // console.log(questions)
    } catch (error) {
        res.status(500).send('error server')

    }
}
)

module.exports = quizRout