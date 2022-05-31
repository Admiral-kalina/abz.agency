import { ADD_USER_FAILURE, ADD_USER_STARTED, ADD_USER_SUCCESS} from "./actionTypes";
const axios = require('axios')

export const addUser = () =>{
    return dispatch => {
        dispatch(addUserStarted())

           axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=3&count=6')
               .then(response => dispatch(addUserSuccess(response.data.users)))
               .catch(error => console.log(error))

    }
}

export const addUserStarted = () => ({
    type:ADD_USER_STARTED
});

export const addUserSuccess = user => ({
        type:ADD_USER_SUCCESS,
        payload: user

});

export const addUserFailure = error => ({
    type:ADD_USER_FAILURE,
    payload: {
        ...error
    }
});

