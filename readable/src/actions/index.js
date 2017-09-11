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
