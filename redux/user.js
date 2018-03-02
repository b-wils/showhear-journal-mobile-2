import {Facebook} from 'expo';

// Actions
const LOGIN = 'user/LOGIN'
const LOGOUT = 'user/LOGOUT'

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loginComplete(token) {
    console.log('login complete!')
  return { type: LOGIN, token: token };
}

// thunks
export function loginUser () {
  return (dispatch) => {
	  // var { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('159441374775648', {
	  //     permissions: ['public_profile'],
	  //   });

	  // if (type === 'success') {
   //      dispatch(loginComplete(token))
	  // } 

      var token = 'test'

      dispatch(loginComplete(token))
  }
}