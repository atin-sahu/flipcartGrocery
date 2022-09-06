import { CARTCOUNT_FAILURE, CARTCOUNT_REQUEST, CARTCOUNT_SUCCESS } from "./action";


const initialState = {
    count:JSON.parse(Number(localStorage.getItem("cartCount")) || 0)
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