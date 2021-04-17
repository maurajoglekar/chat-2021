import * as types from './types';

export function getRooms({roomId}) {
  return {
    type: types.GET_ROOMS,
    roomId
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

export function getRoomMessages({roomId}) {
  return {
    type: types.GET_ROOM_MESSAGES,
    roomId
  };
}

export function addRoomMessage(payload) {
  return {
    type: types.ADD_ROOM_MESSAGE,
    payload
  };
}

export function setRoomMessages(payload) {
  return {
    type: types.SET_ROOM_MESSAGES,
    payload
  };
}