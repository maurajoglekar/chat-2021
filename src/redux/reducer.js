import * as types from "./types";

const initialState = {
  rooms: []
};

function arrayMerge(destinationArray, arrayToMerge) {
  let destinationCopy = [...destinationArray];
  const arrayToMergeCopy = arrayToMerge.filter(
    (item) =>
      arrayToMerge.find((existingItem) => existingItem.id === item.id) === item
  );

  const newItems = arrayToMergeCopy.filter((itemToMerge) => {
    let found = false;
    destinationCopy = destinationCopy.map((item) => {
      if (item.id === itemToMerge.id) {
        found = true;
        return { ...item, ...itemToMerge };
      }
      return item;
    });
    return !found;
  });

  return [...destinationCopy, ...newItems];
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ROOMS: {
      let mergedRooms = arrayMerge(action.payload, state.rooms);
      return {
        ...state,
        rooms: mergedRooms
      };
    }
    case types.SET_ROOM_MESSAGE: {
      const { roomId, message, name } = action.payload;
      const room = state.rooms.find((room) => room.id === roomId);
      // add the user to users list if not already there
      if (room.users.indexOf(name) === -1) {
        room.users.push(name);
      }
      room.messages.push(message);
      let mergedRooms2 = arrayMerge(state.rooms, [room]);
      return {
        ...state,
        rooms: mergedRooms2
      };
    }
    case types.SET_ROOM_MESSAGE_REACTION: {
      const { roomId, messageId, reaction } = action.payload;
      const room = state.rooms.find((room) => room.id === roomId);
      const message = room.messages.find((message) => message.id === messageId);
      message.reaction = reaction;
      let mergedRooms2 = arrayMerge(state.rooms, [room]);
      return {
        ...state,
        rooms: mergedRooms2
      };
    }
    default:
      return state;
  }
}

export default reducer;
