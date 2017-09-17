import * as ReadableAPI from '../api/ReadableAPI.js';
import * as ActionTypes from './actionTypes.js';

export const getCategories = categories => ({
  type: ActionTypes.GET_CATEGORIES,
  res: categories
})

export const fetchCategories = () => dispatch => (
    ReadableAPI.getCategories().then(categories => dispatch(getCategories(categories)))
);

export const getAllPosts = posts => ({
  type: ActionTypes.GET_ALL_POSTS,
  res: posts
})

export const fetchAllPosts = () => dispatch => (
    ReadableAPI.getAllPosts().then(posts => dispatch(getAllPosts(posts)))
);

export const getComments = comments => ({
  type: ActionTypes.GET_COMMENTS,
  res: comments
});

export const fetchComments = (id) => dispatch => (
    ReadableAPI.getComments(id).then(comments => dispatch(getComments(comments)))
);

export const updateVoteToPost = (id, vote) => dispatch => (
    ReadableAPI.addVoteToPost(id, vote).then(ReadableAPI.getAllPosts().then(posts => dispatch(getAllPosts(posts))))
);

export const updateVoteToComment = (id, vote, parentId) => dispatch => (
    ReadableAPI.addVoteToComment(id, vote).then(comments => dispatch(getComments(comments)))
);

export const updateEditClick = (id) => ({
  type: ActionTypes.EDIT_POST,
  res: id
})

export const updateCategory = (category) => ({
  type: ActionTypes.UPDATE_ACTIVE_CATEGORY,
  res: category
})

export const handleBackToHomepage = () => ({
  type: ActionTypes.HANDLE_BACK_TO_HOMEPAGE,
  res: {}
})

export const handleAddPost = (post) => dispatch => {
    ReadableAPI.addPost(post).then(ReadableAPI.getAllPosts().then(posts => dispatch(getAllPosts(posts))))
}

export const handleDeletePost = (id) => dispatch => {
  ReadableAPI.deletePost(id).then(ReadableAPI.getAllPosts().then(posts => dispatch(getAllPosts(posts))))
}

export const handleDeleteComment = (id, parentId) => dispatch => {
  ReadableAPI.deleteComment(id).then(ReadableAPI.getComments(parentId).then(comments => dispatch(getComments(comments))))
}

export const handleAddComment = (comment, parentId) => dispatch => {
  ReadableAPI.addComment(comment).then(comments => ReadableAPI.getComments(comments.parentId).then(comments => dispatch(getComments(comments))))
}
