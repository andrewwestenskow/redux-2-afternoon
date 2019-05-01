import axios from 'axios'

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
  let users = axios.get('/auth/user-data')
  return{
    type: REQUEST_USER_DATA,
    payload: users
  }
}

function usersReducer (state = initialState, action){
  switch(action.type){
    case `${REQUEST_USER_DATA}_FULFILLED`:
    const {firstName, lastName, email} = action.payload.data.user
      return {
        firstName,
        lastName,
        email}
    default:
      return state;
  }
}

export default usersReducer