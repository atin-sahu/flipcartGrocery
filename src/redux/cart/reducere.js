import { CARTCOUNT_FAILURE, CARTCOUNT_REQUEST, CARTCOUNT_SUCCESS } from "./action";


const initialState = {
    count:Number(localStorage.getItem("cartCount"))
}

export const reducer = (state=initialState, action)=>{
    const { type, payload} = action;
    switch (type) {
        case CARTCOUNT_REQUEST: return {...state, };
        case CARTCOUNT_SUCCESS: return {...state, count:payload};
        case CARTCOUNT_FAILURE: return { ...state, };
        default: return state;
    }
}