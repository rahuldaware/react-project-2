import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
  switch(action.type) {
    case ActionTypes.OPEN_UPDATE_COMMENT: {
        return {
          ...state,
          updateComment: action.res,
        }
    }
    default:
    return {
      ...state
    }
  }
}
