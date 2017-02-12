import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { MAP } from '../constants/actionTypes';
import mapboxgl from 'mapbox-gl';
import { mapboxToken } from '../../.env';

import regeneratorRuntime from 'regenerator-runtime';
console.log(regeneratorRuntime);

export function* watchMap() {
  yield* takeLatest(MAP.MOUNT, mountMap);
}

export function* mountMap() {
  try {
    console.log('in the saga');
    yield call(mountMapEffect);
    yield put({ type: MAP.MOUNTED });
  } catch (error) {
    yield put({ type: MAP.ERROR, error });
  }
}

function mountMapEffect() {
  mapboxgl.accessToken = mapboxToken;
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-73.9724680, 40.6776330],
    zoom: 11,
  });
}
