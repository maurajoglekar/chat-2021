import * as types from "./types";

const initialState = {
  rooms: []
};

/*
const mergeById = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.id === itm.id) && item),
        ...itm
    }));
*/
/*
const mergeById = (arr1, arr2) => arr1.map(item => {
  const obj = arr2.find(o => o.id === item.id);
  return { ...item, ...obj };
});
*/
function arrayMerge(
  destinationArray,
  arrayToMerge,
  idField = 'id'
) {
  let destinationCopy = [...destinationArray];
  const arrayToMergeCopy = arrayToMerge.filter(
    item =>
      arrayToMerge.find(
        existingItem => existingItem[idField] === item[idField]
      ) === item
  );

  // get a list of new items by iterating over the source array and filtering out the ones that exist in the destination array
  const newItems = arrayToMergeCopy.filter(itemToMerge => {
    let found = false;

    // iterate over the destination array to overwrite any values with a matching identifier that are newer in the source array
    destinationCopy = destinationCopy.map(item => {
      if (item[idField] === itemToMerge[idField]) {
        // if we found an item with a corresponding identifier in the destination array flip our found flag
        // even if the data is not newer we don't want to append this item to the result array as it would be duplicated
        found = true;

      }
      return item;
    });

    return !found;
  });

  // return a new array composed of the newly merged destination array joined with the new items that didn't exist before
  return [...destinationCopy, ...newItems];
}

//const mergeById = (arr1, arr2) => arr2.map(x => Object.assign(x, arr1.find(y => y.id == x.id)));

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ROOMS: {
      const newRooms = action.payload;
      const currentRooms = state.rooms;
      let mergedRooms = arrayMerge(newRooms, currentRooms);
      return {
        ...state,
        rooms: mergedRooms
        };
    }
    case types.SET_ROOM_MESSAGES: {
      const { id, messages } = action.payload;
      const room = state.rooms.find(
        room => room.id === id);
      room.messages = messages;
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