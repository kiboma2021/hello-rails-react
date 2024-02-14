import { combineReducers } from 'redux';
import { FETCH_GREETING_SUCCESS } from './actions';

const initialState = {
  data: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        data: action.payload.message,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
