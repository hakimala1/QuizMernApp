import { REMOVE_ALERT, SET_ALERT } from "../types/alertTypes"


const initState=[]

function alertReducer(state=initState,{type,payload}){
    switch(type){
        case SET_ALERT:
            return [...state,payload]
        case REMOVE_ALERT:
             return state.filter(alert=>alert.id!==payload)
        default:
            return state
    }
}
export default alertReducer