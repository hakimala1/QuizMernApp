import { CREATEQUESTION, GETQUESTIONS } from "../types/quizType"

const initalState = {
  question : {},
  questions : []


}

const quizReducer = (state=initalState,action)=>{
    switch (action.type) {
        case CREATEQUESTION:
            return { ...state, question: action.payload.question }   
        case GETQUESTIONS : 
        return {...state, questions:action.payload}
    
        default:
            return state
    }
}

export default quizReducer