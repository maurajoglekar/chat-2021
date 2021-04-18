import * as types from './types';
import * as actions from './actions';
import chatClient from '../apis/chatClient';
import { takeEvery, put, call, fork, all, select } from "redux-saga/effects";


export function* getRoomsSaga({roomId}) {
    try {
        const response = yield call(
            [chatClient, chatClient.getRooms]
          );

        yield put(actions.setRooms(response.data));

    } catch (response) {
        console.log('Error getting rooms');
    }
}

function* watchGetRooms() {
    yield takeEvery(types.GET_ROOMS, getRoomsSaga);
}

export function* getRoomSaga({roomId}) {
    try {

        const roomResponse = yield call(
            [chatClient, chatClient.getRoom],
            roomId
        );

        // save the new room info in the state
        yield put(actions.setRooms([roomResponse.data]));

    } catch (response) {
        console.log('Error getting room');
    }
}

function* watchGetRoom() {
    yield takeEvery(types.GET_ROOM, getRoomSaga);
}

export function* getRoomMessagesSaga({roomId}) {
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
        console.log('Error getting room');
    }
}

function* watchGetRoomMessages() {
    yield takeEvery(types.GET_ROOM_MESSAGES, getRoomMessagesSaga);
}

export function* addRoomMessageSaga({roomId, name, message}) {
    try {

        const response = yield call(
            [chatClient, chatClient.addRoomMessage],
            roomId,
            name,
            message
        );

        yield put(actions.setRoomMessages([response.data]));

    } catch (response) {
        console.log('Error getting room');
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