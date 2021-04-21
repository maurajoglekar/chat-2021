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

export function getRoom({
  roomId
}) {
  return {
    type: types.GET_ROOM,
    roomId
  };
}

export function getRoomMessages({
  roomId
}) {
  return {
    type: types.GET_ROOM_MESSAGES,
    roomId
  };
}

export function addRoomMessage({
  roomId,
  name,
  message,
  doneCallback
}) {
  return {
    type: types.ADD_ROOM_MESSAGE,
    roomId,
    name,
    message,
    doneCallback
  };
}

export function setRoomMessage(payload) {
  return {
    type: types.SET_ROOM_MESSAGE,
    payload
  };
}