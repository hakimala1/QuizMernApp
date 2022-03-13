import { CREATEPROFIL, GETALLPROFIL } from "../types/profileTypes"

const initalState = {
    profile : {},
    listPofiles:[]
  
    
}

const profilReducer = (state=initalState,action)=>{
    switch (action.type) {
        case CREATEPROFIL:
            
            return { ...state, profile: action.payload.profile }
        case GETALLPROFIL:
                return {...state, listPofiles:action.payload}
    
        default:
            return state
    }
}

export default profilReducer