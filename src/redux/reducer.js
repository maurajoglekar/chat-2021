import * as types from "./types";

const initialState = {
  rooms: []
};

function arrayMerge(destinationArray, arrayToMerge) {
  let destinationCopy = [...destinationArray];
  const arrayToMergeCopy = arrayToMerge.filter(
    item =>
      arrayToMerge.find(
        existingItem => existingItem.id === item.id
      ) === item
  );

  const newItems = arrayToMergeCopy.filter(itemToMerge => {
    let found = false;
    destinationCopy = destinationCopy.map(item => {
      if (item.id === itemToMerge.id) {
        found = true;
        return {...item, ...itemToMerge};

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
      const { roomId, message } = action.payload;
      const room = state.rooms.find(
        room => room.id === roomId);
      room.messages.push(message);
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