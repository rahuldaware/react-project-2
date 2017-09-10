import {combineReducers} from 'redux';
import CategoryReducer from './reducer-categories';
import PostReducer from './reducer-posts';
import CommentReducer from './reducer-comments';
const allReducers = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  comments: CommentReducer
})

export default allReducers;
