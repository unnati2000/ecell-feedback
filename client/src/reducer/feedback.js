import { POST_FEEDBACK, GET_FEEDBACK, DELETE_FEEDBACK } from '../actions/types';
const initialState = {
  post: null,
  posts: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_FEEDBACK: {
      return {
        ...state,
        post: payload,
      };
    }
    case GET_FEEDBACK: {
      return {
        ...state,
        posts: payload,
      };
    }
    case DELETE_FEEDBACK:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
