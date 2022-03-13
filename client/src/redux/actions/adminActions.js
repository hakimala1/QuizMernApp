import axios from "axios"
import { ADDFORMATEUR } from "../types/adminTypes"
import { FAIL } from "../types/authTypes"

export const addNewFormateur = (formData) => async (dispatch) => {

    try {
        await axios.post('/admin/add', formData)
        dispatch({
            type: ADDFORMATEUR,
            payload: res.formData
        })
        // dispatch(getAllProducts())
    } catch (error) {
        dispatch({
            type: FAIL,
            payload: error.response.data
        })
    }
}