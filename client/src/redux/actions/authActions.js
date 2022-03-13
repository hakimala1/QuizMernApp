import { ADDFORMATEUR, CLEAR, FAIL, GETALLUSERS, GETCURRENT, LOGOUT, SINGIN, SINGUP } from "../types/authTypes"
import axios from 'axios';
import { setAlert } from "./alertActions";

export const signup = (data, navigate) => async (dispatch) => {

    try {
        const res = await axios.post('/auth/signup', data)
        dispatch({
            type: SINGUP,
            payload: res.data
        })
        dispatch(setAlert(res.data.msg,"success"))
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
        error.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}
export const addFormateur = (data,navigate) => async (dispatch) => {

    try {
        const res = await axios.post('/auth/addformateur', data)
        dispatch({
            type: ADDFORMATEUR,
            payload: res.data
        })
        navigate('/Profile/users')

       
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}
export const signin = (data, navigate) => async (dispatch) => {

    try {
        const res = await axios.post('/auth/signin', data)
        dispatch({
            type: SINGIN,
            payload: res.data
        })
        dispatch(setAlert(res.data.msg,"success"))
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
        error.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}

export const getCurrent = () => async (dispatch) => {

    const token = localStorage.getItem('token')
    const config = {
        headers: {
            authorization: token
        }
    }
    try {
        const res = await axios.get('/auth/me', config)
        dispatch({
            type: GETCURRENT,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })

    }
}

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/auth/users')
        dispatch({
            type: GETALLUSERS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}

export const removeUser = (id) => async (dispatch) => {

    try {
        await axios.delete(`/auth/users/${id}`)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
    }
}

export const updateUser=(id,formData)=> async(dispatch)=>{
    try {
        await axios.put(`/auth/users/${id}`,formData)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
        
    }
}

export const addQuiz=(id,formData)=> async(dispatch)=>{
    try {
        await axios.put(`/auth/quiz/${id}`,formData)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
        
    }
}

export const updateProfile=(id,formData)=> async(dispatch)=>{
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            authorization: token
        }
    }
    const data = new FormData()
    data.append('myImage',formData.imageUrl)
    data.append('username',formData.username)
    data.append('age',formData.age)
  
    
    try {
        await axios.put(`/auth/me/${id}`,data,config)
        dispatch(getCurrent())
  
    } catch (error) {
        console.log(error)
        
    }
}

export const logout =()=>{
   return { type : LOGOUT} 
}

export const clearerrors =()=>{
    return {type : CLEAR}
}