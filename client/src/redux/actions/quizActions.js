import axios from "axios"
import { FAIL } from "../types/authTypes"
import { CREATEQUESTION, GETQUESTIONS } from "../types/quizType"

export const createQuestion = (data) => async (dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            authorization: token
        }
    }
    try {
        const res = await axios.post('/quiz/createQuestion',data,config)
        console.log("quetion created")
        dispatch({
            type: CREATEQUESTION,
            payload: res.data
        })
       
      
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}
export const getQuestion = () => async (dispatch) => {
    try {
        const res = await axios.get('/quiz/questions')
        dispatch({
            type: GETQUESTIONS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}