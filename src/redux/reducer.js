import * as types from "./types";

const initialState = {
  rooms: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ROOMS: {
      return {
        ...state,
        rooms: action.payload
        };
    }
    default:
      return state;
  }
}

export default reducer;