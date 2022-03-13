import { ADDFORMATEUR } from "../types/adminTypes";

const initalState = {
    user : {},
    edit : false
    
}

const adminReducers = (state=initalState,action)=>{
    switch (action.type) {
        case ADDFORMATEUR:
            
            return { ...state, user: action.payload.user }
    
        default:
            return state
    }
}

export default adminReducers