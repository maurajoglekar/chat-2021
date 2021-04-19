import * as types from "./types";

const initialState = {
  selectedRoomId: 0,
  rooms: []
};

function arrayMerge(destinationArray, arrayToMerge, idField = 'id'
) {
  let destinationCopy = [...destinationArray];
  const arrayToMergeCopy = arrayToMerge.filter(
    item =>
      arrayToMerge.find(
        existingItem => existingItem[idField] === item[idField]
      ) === item
  );

  const newItems = arrayToMergeCopy.filter(itemToMerge => {
    let found = false;

    destinationCopy = destinationCopy.map(item => {
      if (item[idField] === itemToMerge[idField]) {
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
    case types.SET_SELECTED_ROOM_ID: {
      const { roomId } = action.payload;
      return {
        ...state,
        selectedRoomId: roomId
        };
    }
    default:
      return state;
  }
}

export default reducer;