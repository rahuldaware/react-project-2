import * as ActionTypes from '../actions/actionTypes.js';

export default function(state={}, action) {
      switch(action.type) {
        case ActionTypes.GET_COMMENTS:
        if(!state.comments) {
          state.comments = new Map()
        }
        if(action.res.length > 0) {
            state.comments.set(action.res[0].parentId, action.res)
        }
        return state;

        default:
          return state;
      }
}
