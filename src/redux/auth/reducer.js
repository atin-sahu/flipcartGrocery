import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./action";

const initialState = {
    auth:false,
    token:""
}

export const reducer = (state=initialState, action)=>{
    const { type, payload} = action;
    switch (type) {
        case SIGNIN_REQUEST: return {...state, auth:false, token:""};
        case SIGNIN_SUCCESS: return {...state, auth:true, token:payload.token};
        case SIGNIN_FAILURE: return { ...state, auth:false,token:"" };
        default: return state;
    }
}