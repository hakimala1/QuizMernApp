import { REMOVE_ALERT, SET_ALERT } from "../types/alertTypes"


export const setAlert=(msg,typeAlert)=>(dispatch)=>{
    const id =Math.random()
    dispatch({type:SET_ALERT,payload:{msg,id,typeAlert}})
    setTimeout(()=>{
        dispatch({type:REMOVE_ALERT,payload:id})
    },5000)
}