import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./getUsers/GetUsers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    getUser: userReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
