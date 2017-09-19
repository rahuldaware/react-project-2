import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
      console.log(action.type);
      switch(action.type) {
        case ActionTypes.EDIT_POST:
          return {
            ...state,
            activeId : action.res,
            activeCategory : {},
            editPost: {}
          }
        case ActionTypes.UPDATE_ACTIVE_CATEGORY:
          return {
            ...state,
            activeCategory : action.res,
            activeId: {},
            editPost: {}
          }
        case ActionTypes.HANDLE_BACK_TO_HOMEPAGE:
          return {
            ...state,
            activeCategory : {},
            activeId: {}
            editPost: {}
          }
        

        default:
          return state;
      }
}
