import {combineReducers} from 'redux';
import CategoryReducer from './reducer-categories';
import PostReducer from './reducer-posts';
import CommentReducer from './reducer-comments';
import ActiveViewReducer from './reducer-activeView';
const allReducers = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  comments: CommentReducer,
  activeView: ActiveViewReducer
})

export default allReducers;
