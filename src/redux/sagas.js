import * as types from './types';
import * as actions from './actions';
import chatClient from '../apis/chatClient';
import { takeLatest, put, call, fork, all} from "redux-saga/effects";


export function* getRoomsSaga() {
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
    yield takeLatest(types.GET_ROOMS, getRoomsSaga);
}

// ------------ Watch Sagas ---------------
export default function* watchChat() {
    yield all([fork(watchGetRooms)]);
}