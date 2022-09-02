import axios from "axios";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInRequest = ()=>{
    return {
        type:SIGNIN_REQUEST
    }
}
const signInSuccess = (payload) => {
    return{
        type:SIGNIN_SUCCESS,
        payload
    }
}
const signInFailure = () => {
    return{
        type:SIGNIN_FAILURE,
    }
}

export const signIn = (payload) => (dispatch) => {
    dispatch(signInRequest())
    axios.post("http://localhost:5000/login", payload)
    .then((res)=>dispatch(signInSuccess(res.data),alert("Login Successfull")))
    .catch((err)=>dispatch(signInFailure(err.response),alert(JSON.stringify(err.response.data.message))));
}
