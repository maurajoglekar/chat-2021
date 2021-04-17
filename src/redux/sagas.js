import * as types from './types';
import * as actions from './actions';
import chatClient from '../apis/chatClient';
import { takeLatest, put, call, fork, all, select } from "redux-saga/effects";


export function* getRoomsSaga({roomId}) {
    try {
        const response = yield call(
            [chatClient, chatClient.getRooms]
          );
        yield put(actions.setRooms(response.data));

        yield call(getRoomSaga, {roomId});

    } catch (response) {
        console.log('Error getting rooms');
    }
}

function* watchGetRooms() {
    yield takeLatest(types.GET_ROOMS, getRoomsSaga);
}

export function* getRoomSaga({roomId}) {
    try {

        // call the APIs to get the room users and messages
        const roomResponse = yield call(
            [chatClient, chatClient.getRoom],
            roomId
        );
        const messagesResponse = yield call(
            [chatClient, chatClient.getRoomMessages],
            roomId
        );

        // create a new selected room object
        const rooms = yield select(rooms);
        const selectedRoom = rooms.find(
            room => room.id === roomId);
        selectedRoom.messages = messagesResponse.data;
        const { name, users } = roomResponse.data;
        selectedRoom.users = users;
        selectedRoom.name = name;
        
        // save the new room info in the state
        yield put(actions.setRooms(selectedRoom));

    } catch (response) {
        console.log('Error getting room');
    }
}

function* watchGetRoom() {
    yield takeLatest(types.GET_ROOM, getRoomSaga);
}

// ------------ Watch Sagas ---------------
export default function* watchChat() {
    yield all([fork(watchGetRooms)]);
    yield all([fork(watchGetRoom)]);
}