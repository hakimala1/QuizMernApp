import { ADDFORMATEUR, CLEAR, EDIT, FAIL, GETALLUSERS, GETCURRENT, LOGOUT, SINGIN, SINGUP } from "../types/authTypes"

const initalState = {
    user: {},
    formateur : {},
    liste : [],
    auth: false,
    errors: [],
    loading:true
}

const authReducer = (state = initalState, action) => {

    switch (action.type) {
        case SINGUP:
            case SINGIN:
            localStorage.setItem('token', action.payload.token)
            return { ...state, user: action.payload.user, auth: true,loading:false }
        case ADDFORMATEUR:
            return { ...state, formateur: action.payload.formateur }
        case GETCURRENT : 
            return {...state, user : action.payload , auth : true,loading:false}
        case GETALLUSERS:
            return {...state, liste:action.payload}
            
        case LOGOUT :
            localStorage.removeItem('token')
            return {...state, auth:false, user:{},loading:false}
        case CLEAR : 
            return {...state, errors: []}
         
        case FAIL:
            return { ...state, errors: action.payload.errors, auth: false }


        default:
            return state
    }
}

export default authReducer