import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import { fetchActive, fetchFlickr, fetchMember, fetchYoutube } from "./api";
import * as types from "./actionType";
function* callMember() {
  yield takeLatest(types.MEMBER.start, returnMember);
}

function* returnMember() {
  try {
    const response = yield call(fetchMember);
    yield put({ type: types.MEMBER.success, payload: response.Member });
  } catch (err) {
    yield put({ type: types.MEMBER.fail, payload: err });
  }
}

function* callActive() {
  yield takeLatest(types.ACTIVE.start, function* returnActive() {
    try {
      const response = yield call(fetchActive);
      yield put({ type: types.ACTIVE.success, payload: response.activities });
    } catch (err) {
      yield put({ type: types.ACTIVE.fail, payload: err });
    }
  });
}

function* callYoutube() {
  yield takeLatest(types.YOUTUBE.start, function* returnYoutube() {
    try {
      const response = yield call(fetchYoutube);
      yield put({ type: types.YOUTUBE.success, payload: response.items });
    } catch (err) {
      yield put({ type: types.YOUTUBE.fail, payload: err });
    }
  });
}

function* callFlickr() {
  yield takeLatest(types.FLICKR.start, function* returnFlickr(action) {
    try {
      const response = yield call(fetchFlickr, action.opt);
      yield put({ type: types.FLICKR.success, payload: response.photos.photo });
    } catch (err) {
      yield put({ type: types.FLICKR.fail, payload: err });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(callActive),
    fork(callFlickr),
    fork(callMember),
    fork(callYoutube),
  ]);
}
