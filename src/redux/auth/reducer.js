import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from "./action";

const initialState = {
    auth:false,
    token:"",
    user:""
}

export const reducer = (state=initialState, action)=>{
    const { type, payload} = action;
    switch (type) {
        case SIGNIN_REQUEST: return {...state, auth:false, token:"", user:""};
        case SIGNIN_SUCCESS: return {...state, auth:true, token:payload.token, user:payload.user.name};
        case SIGNIN_FAILURE: return { ...state, auth:false, token:"", user:""};
        case SIGNOUT_REQUEST: return state;
        case SIGNOUT_SUCCESS: return { ...state, auth:false, token:"", user:""};
        case SIGNOUT_FAILURE: return state;
        default: return state;
    }
}