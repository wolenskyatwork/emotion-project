
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION } from '../constants/actionTypes';
import { getGeolocation } from '../api';

import regeneratorRuntime from 'regenerator-runtime';
console.log(regeneratorRuntime);

export function* watchGetLocation() {
  yield* takeLatest(LOCATION.GET, getLocation);
}

export function* getLocation() {
  try {
    const userLocation = yield call(getGeolocation);
    yield put({ type: LOCATION.SUCCESS, userLocation: userLocation.data.location });
  } catch (error) {
    yield put({ type: LOCATION.ERROR, value: error });
  }
}
