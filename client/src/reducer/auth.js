import { SIGNIN, USER_LOADED } from '../actions/types';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGNIN: {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    }
    default:
      return state;
  }
}
