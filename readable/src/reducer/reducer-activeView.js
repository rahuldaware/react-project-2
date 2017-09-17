import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
      switch(action.type) {
        case ActionTypes.EDIT_POST:
          return {
            ...state,
            activeId : action.res,
            activeCategory : {}
          }
        case ActionTypes.UPDATE_ACTIVE_CATEGORY:
          return {
            ...state,
            activeCategory : action.res,
            activeId: {}
          }
        case ActionTypes.HANDLE_BACK_TO_HOMEPAGE:
          return {
            ...state,
            activeCategory : {},
            activeId: {}
          }
        default:
          return state;
      }
}
