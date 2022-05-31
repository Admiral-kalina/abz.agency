import {ADD_USER_FAILURE, ADD_USER_STARTED, ADD_USER_SUCCESS} from "./actionTypes";

const initialState = {
    loading: false,
    users: [],
    error: null
};

export const userReducer = (state = initialState, action) =>{
    console.log(action)
    switch (action.type){
        case ADD_USER_STARTED:
            return{
                ...state,
                loading:true
            }
        case ADD_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case ADD_USER_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }

}
console.log(initialState)
