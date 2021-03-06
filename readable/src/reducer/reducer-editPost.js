import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
  switch(action.type) {
    case ActionTypes.HANDLE_EDIT_POST: {
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
