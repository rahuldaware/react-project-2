import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
  switch(action.type) {
    case ActionTypes.HANDLE_ADD_COMMENT: {
        return {
          ...state,
          parentId: action.res,
        }
    }
    default:
    return {
      ...state
    }
  }
}
