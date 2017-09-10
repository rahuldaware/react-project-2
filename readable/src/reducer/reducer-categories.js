import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
      switch(action.type) {
        case ActionTypes.GET_CATEGORIES:
          return {
            ...state,
            categories : action.res.categories
          }
        default:
          return state;
      }
}
