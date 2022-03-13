import axios from "axios"
import { FAIL } from "../types/authTypes"
import { CREATEPROFIL, GETALLPROFIL } from "../types/profileTypes"

export const createProfil = (data) => async (dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            authorization: token
        }
    }
    try {
        const res = await axios.post('/profile/signup',data,config)
        console.log("porfile created")
        dispatch({
            type: CREATEPROFIL,
            payload: res.data
        })
       
      
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}

export const getAllProfils = () => async (dispatch) => {
    try {
        const res = await axios.get('/profile/users')
        dispatch({
            type: GETALLPROFIL,
            payload: res.data
        })
    } catch (error) {
        console.log(error)

    }

}

export const updateProfile=(id,formData)=> async(dispatch)=>{
    try {
        await axios.put(`/profile/users/${id}`,formData)
        dispatch(getAllProfils())
    } catch (error) {
        console.log(error)
        
    }
}