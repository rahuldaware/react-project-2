import * as ReadableAPI from './api/ReadableAPI.js';
import * as ActionTypes from './actionTypes.js';

export function getCategories() {
  return {
    type: ActionTypes.GET_CATEGORIES,
    res: ReadableAPI.getCategories(),
  };
}

export function getCategoryPosts(category) {
  return {
    type: ActionTypes.GET_CATEGORY_POSTS,
    res: ReadableAPI.getCategoryPosts(category),
  };
}

export function getAllPosts() {
  return {
    type: ActionTypes.GET_ALL_POSTS,
    res: ReadableAPI.getAllPosts(),
  };
}

export function addPost(post) {
  return {
    type: ActionTypes.ADD_POST,
    res: ReadableAPI.addPost(post),
  };
}

export function getSinglePost(id) {
  return {
    type: ActionTypes.GET_SINGLE_POST,
    res: ReadableAPI.getSinglePost(id),
  };
}

export function addVoteToPost(id, option) {
  return {
    type: ActionTypes.ADD_VOTE_TO_POST,
    res: ReadableAPI.addVoteToPost(id, option),
  };
}

export function updatePost(id, body) {
  return {
    type: ActionTypes.UPDATE_POST,
    res: ReadableAPI.updatePost(id, body),
  };
}

export function deletePost(id) {
  return {
    type: ActionTypes.DELETE_POST,
    res: ReadableAPI.deletePost(id),
  };
}

export function getComments(id) {
  return {
    type: ActionTypes.GET_COMMENTS,
    res: ReadableAPI.getComments(id),
  };
}

export function addComment(body) {
  return {
    type: ActionTypes.ADD_COMMENT,
    res: ReadableAPI.addComment(body),
  };
}

export function getSingleComment(id) {
  return {
    type: ActionTypes.GET_SINGLE_COMMENT,
    res: ReadableAPI.getSingleComment(id),
  };
}

export function addVoteToComment(id, vote) {
  return {
    type: ActionTypes.ADD_VOTE_TO_COMMENT,
    res: ReadableAPI.addVoteToComment(id, vote),
  };
}

export function updateComment(id, body) {
  return {
    type: ActionTypes.UPDATE_COMMENT,
    res: ReadableAPI.updateComment(id, body),
  };
}

export function deleteComment(id) {
  return {
    type: ActionTypes.DELETE_COMMENT,
    res: ActionTypes.deleteComment(id),
  };
}
