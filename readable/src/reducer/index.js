import {combineReducers} from 'redux';
import CategoryReducer from './reducer-categories';
import PostReducer from './reducer-posts';
import CommentReducer from './reducer-comments';
import ActiveViewReducer from './reducer-activeView';
import EditPostReducer from './reducer-editPost';
import AddCommentReducer from './reducer-addComment';
import UpdateCommentReducer from './reducer-updateComment';
const allReducers = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  comments: CommentReducer,
  activeView: ActiveViewReducer,
  editPost: EditPostReducer,
  addComment: AddCommentReducer,
  updateComment: UpdateCommentReducer
})

export default allReducers;
