import { SIGNIN, USER_LOADED } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/user');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post('/signin', body);
    dispatch({
      type: SIGNIN,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
  }
};
