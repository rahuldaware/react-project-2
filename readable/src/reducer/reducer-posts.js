import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
      switch(action.type) {
        case ActionTypes.GET_ALL_POSTS:
          return {
            ...state,
            posts : action.res
          }
        default:
          return state;
      }
}
