import {
  GET_POSTS_PENDING,
  GET_POSTS_OK,
  GET_POSTS_ERROR,
  DELETE_POST_PENDING,
  DELETE_POST_OK,
  DELETE_POST_ERROR,
  GET_POST_EDIT,
  EDIT_POST_PENDING,
  EDIT_POST_OK,
  EDIT_POST_ERROR,
  GET_POST_DETAILS,
  GET_POST_DETAILS_OK,
} from "../actionTypes";
import store from "../store";

//  posts actions
const getAllPosts = () => ({
  type: GET_POSTS_PENDING,
  payload: true,
});

const getPostsOk = (posts) => ({
  type: GET_POSTS_OK,
  payload: posts,
});

const getPostsError = () => ({
  type: GET_POSTS_ERROR,
  payload: true,
});

export const getAllPostsAction = () => store.dispatch(getAllPosts());

export const getPostsOkAction = (posts) => store.dispatch(getPostsOk(posts));

export const getPostsErrorAction = () => store.dispatch(getPostsError());

// Delete post
const deletePostPending = (id) => ({
  type: DELETE_POST_PENDING,
  payload: id,
});

const deletePostOk = () => ({
  type: DELETE_POST_OK,
});

const deletePostError = () => ({
  type: DELETE_POST_ERROR,
  payload: true,
});

export const deletePostAction = (id) => store.dispatch(deletePostPending(id));

export const deletePostOkAction = () => store.dispatch(deletePostOk());

export const deletePostErrorAction = () => store.dispatch(deletePostError());

// Edit product
const retrievePostAction = (post) => ({
  type: GET_POST_EDIT,
  payload: post,
});

const editPost = (post) => ({
  type: EDIT_POST_PENDING,
  post: post,
});

const editPostOk = (post) => ({
  type: EDIT_POST_OK,
  payload: post,
});

const editPostError = () => ({
  type: EDIT_POST_ERROR,
  payload: true,
});

export const retrievePostEditAction = (post) =>
  store.dispatch(retrievePostAction(post));

export const editPostAction = (post) => store.dispatch(editPost(post));

export const editPostOkAction = (post) => store.dispatch(editPostOk(post));

export const editPostErrorAction = () => store.dispatch(editPostError());
