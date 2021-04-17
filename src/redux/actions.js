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

export function getRoom({roomId}) {
  return {
    type: types.GET_ROOM,
    roomId
  };
}

export function setRoom(payload) {
  return {
    type: types.SET_ROOM,
    payload
  };
}