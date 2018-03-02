import Immutable, { Map } from 'immutable';
import { createSelector } from 'reselect'
import { Facebook } from 'expo';

// Actions
const LOGIN = 'user/LOGIN'
const LOGOUT = 'user/LOGOUT'

// Reducer
export default function reducer(state = Map({}), action = {}) {
  switch (action.type) {
    case LOGIN:
        return Immutable.fromJS({facebookToken: action.token});
    case LOGOUT:
        return Map({});
    default: return state;
  }
}

// Action Creators
function loginComplete(token) {
  return { type: LOGIN, token: token };
}

function logout() {
    return {type: LOGOUT};
}

// thunks
export function loginUser () {
  return async (dispatch) => {
	  var { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('159441374775648', {
	      permissions: ['public_profile'],
	    });

	  if (type === 'success') {
        dispatch(loginComplete(token))
	  } 
  }
}

export function logoutUser() {
    dispatch(logout())
}

// Selectors
export const getFacebookToken = (state) => state.user.get('facebookToken');