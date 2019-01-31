// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = initialState) => state
// });

import { ADD, MINUS } from '../actions';

const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case MINUS:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default rootReducer;
