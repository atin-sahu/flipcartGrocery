import axios from "axios";
export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_FAILURE = "SIGNOUT_FAILURE";

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
    axios.post("https://flipcartgrocery.herokuapp.com/login", payload)
    .then((res)=>dispatch(signInSuccess(res.data),alert("Login Successfull")))
    .catch((err)=>dispatch(signInFailure(err.response),alert(JSON.stringify(err.response.data.message))));
}


const signOutRequest = ()=>{
    return {
        type:SIGNOUT_REQUEST
    }
}
const signOutSuccess = ()=>{
    return {
        type:SIGNOUT_SUCCESS
    }
}
const signOutFailure = ()=>{
    return {
        type:SIGNOUT_FAILURE
    }
}
export const signOut = () => (dispatch)=>{
    dispatch(signOutRequest());
    try {
        dispatch(signOutSuccess());
    } catch (error) {
        dispatch(signOutFailure());
    }
}