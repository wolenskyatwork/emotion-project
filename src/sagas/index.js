import { fork } from 'redux-saga/effects';
import { watchMap } from './mapbox';
import { watchGetLocation } from './location';

import regeneratorRuntime from 'regenerator-runtime';
console.log(regeneratorRuntime);

export default function* startSagas() {
  yield fork(watchMap);
  yield fork(watchGetLocation);
}
