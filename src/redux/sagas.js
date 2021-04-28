import * as types from "./types";
import * as actions from "./actions";
import chatClient from "./apis/chatClient";
import { takeEvery, put, call, fork, all } from "redux-saga/effects";

export function* getRoomsSaga() {
  try {
    const response = yield call([chatClient, chatClient.getRooms]);

    yield put(actions.setRooms(response.data));
  } catch (response) {
    console.log("Error getting rooms");
  }
}

function* watchGetRooms() {
  yield takeEvery(types.GET_ROOMS, getRoomsSaga);
}

export function* getRoomSaga({ roomId }) {
  try {
    const roomResponse = yield call([chatClient, chatClient.getRoom], roomId);

    // save the new room info in the state
    yield put(actions.setRooms([roomResponse.data]));
  } catch (response) {
    console.log("Error getting room");
  }
}

function* watchGetRoom() {
  yield takeEvery(types.GET_ROOM, getRoomSaga);
}

export function* getRoomMessagesSaga({ roomId }) {
  try {
    const roomResponse = yield call(
      [chatClient, chatClient.getRoomMessages],
      roomId
    );
    const roomObjWithMessages = {
      messages: roomResponse.data,
      id: roomId
    };

    yield put(actions.setRooms([roomObjWithMessages]));
  } catch (response) {
    console.log("Error getting room messages");
  }
}

function* watchGetRoomMessages() {
  yield takeEvery(types.GET_ROOM_MESSAGES, getRoomMessagesSaga);
}

export function* addRoomMessageSaga({ roomId, name, message, doneCallback }) {
  try {
    const response = yield call(
      [chatClient, chatClient.addRoomMessage],
      roomId,
      name,
      message
    );

    const objWithMessage = {
      message: response.data,
      roomId,
      name
    };
    yield put(actions.setRoomMessage(objWithMessage));

    // this does the scroll to bottom after the new message is added
    if (typeof doneCallback === "function") doneCallback();
  } catch (response) {
    console.log("Error adding room");
  }
}

function* watchAddRoomMessage() {
  yield takeEvery(types.ADD_ROOM_MESSAGE, addRoomMessageSaga);
}

// ------------ Watch Sagas ---------------
export default function* watchChat() {
  yield all([fork(watchGetRooms)]);
  yield all([fork(watchGetRoom)]);
  yield all([fork(watchGetRoomMessages)]);
  yield all([fork(watchAddRoomMessage)]);
}
