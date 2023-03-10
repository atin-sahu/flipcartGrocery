import axios from "axios";
export const CARTCOUNT_REQUEST = "CARTCOUNT_REQUEST";
export const CARTCOUNT_SUCCESS = "CARTCOUNT_SUCCESS";
export const CARTCOUNT_FAILURE = "CARTCOUNT_FAILURE";

const cartCountRequest = ()=>{
    return {
        type:CARTCOUNT_REQUEST
    }
}
const cartCountSuccess = (payload)=>{
    return {
        type:CARTCOUNT_SUCCESS,
        payload:payload
    }
}
const cartCountFailure = ()=>{
    return {
        type:CARTCOUNT_FAILURE
    }
}
export const cartCount = () => (dispatch)=>{
    dispatch(cartCountRequest());
    axios.get("http://localhost:5000/carts")
    .then((res)=>dispatch(cartCountSuccess(res.data.length)))
    .catch((err)=>dispatch(cartCountFailure(err.response),alert(JSON.stringify(err.response.data.message))));
}