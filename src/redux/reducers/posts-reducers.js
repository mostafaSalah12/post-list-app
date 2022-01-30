import {
  DELETE_POST_ERROR,
  DELETE_POST_OK,
  DELETE_POST_PENDING,
  EDIT_POST_ERROR,
  EDIT_POST_OK,
  EDIT_POST_PENDING,
  GET_POSTS_ERROR,
  GET_POSTS_OK,
  GET_POSTS_PENDING,
  GET_POST_EDIT,
} from "../actionTypes";

const initialState = {
  posts: [],
  error: false,
  loading: false,
  deletePost: null,
  post: {},
};

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_PENDING:
    case EDIT_POST_PENDING:
      return {
        ...state,
        loading: action.payload,
        post: action.post,
      };

    case GET_POSTS_ERROR:
    case DELETE_POST_ERROR:
    case EDIT_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_POSTS_OK:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };

    case DELETE_POST_PENDING:
      return {
        ...state,
        deletePost: action.payload,
      };

    case DELETE_POST_OK:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== state.deletePost),
        deletePost: null,
      };

    case GET_POST_EDIT:
      return {
        ...state,
        post: action.payload,
        editPost: action.payload,
      };

    case EDIT_POST_OK:
      return {
        ...state,
        editPost: null,
        post: action.post,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? (post = action.payload) : post
        ),
      };

    default:
      return state;
  }
}
