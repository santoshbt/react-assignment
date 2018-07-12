import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});

export default rootReducer;


// const rootReducer = combineReducers({
//   users: (state = [], action) => action.payload || state
// });