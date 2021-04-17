import * as types from './types';

export function getRooms() {
  return {
    type: types.GET_ROOMS
  };
}

export function setRooms(payload) {
  return {
    type: types.SET_ROOMS,
    payload
  };
}