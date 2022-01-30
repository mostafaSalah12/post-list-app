import { combineReducers } from "redux";

// import alertReducer from "./alert-reducer";
import postsReducer from "./posts-reducers";

export default combineReducers({
  posts: postsReducer,
  //   alert: alertReducer,
});
