import axios from 'axios';
import { POST_FEEDBACK, GET_FEEDBACK, DELETE_FEEDBACK } from './types';

export const PostFeedback = (formData) => async (dispatch) => {
  console.log('yaar ho ja');
  try {
    const res = await axios.post('/feedback', formData);
    dispatch({
      type: POST_FEEDBACK,
      payload: res.data,
    });
    console.log('after posting');
  } catch (err) {
    console.log(err);
  }
};

export const GetFeedback = () => async (dispatch) => {
  try {
    const res = await axios.get('/allfeeds');
    dispatch({
      type: GET_FEEDBACK,
      payload: res.data,
    });
    console.log('hello', res.data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteFeedback = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/delete/${id}`);
    console.log(`Deleting feedback ID: ${id}`);
    dispatch({
      type: DELETE_FEEDBACK,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
