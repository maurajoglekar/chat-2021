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
    case types.SET_ROOM: {
      const { id, name, users, messages } = action.payload;
      const list = state.rooms.filter(
        room => room.id === id);
      const replacement = {
        id, name, users, messages
      };
      list.push(replacement);
      return {
        ...state,
        rooms: list
        };
    }
    default:
      return state;
  }
}

export default reducer;