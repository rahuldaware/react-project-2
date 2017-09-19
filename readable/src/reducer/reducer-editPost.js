import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
  switch(action.type) {
    case ActionTypes.HANDLE_EDIT_POST: {
      console.log("Inside handle edit post")
        return {
          ...state,
          editPost: action.res,
        }
    }
    default:
    return {
      ...state
    }
  }
}
