import { combineReducers } from "redux";
import authReducer from "./authReducer";
import adminReducers from "./adminReducers";
import profilReducer from "./profilReducer";
import quizReducer from "./quizReducer"
import alertReducer from "./alert";

const rootReducer =combineReducers({

    authReducer,
    adminReducers,
    profilReducer,
    quizReducer,
    alertReducer
})

export default rootReducer 