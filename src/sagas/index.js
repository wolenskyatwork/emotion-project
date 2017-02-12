import { fork } from 'redux-saga/effects';
import { watchMap } from './mapbox';

import regeneratorRuntime from 'regenerator-runtime';
console.log(regeneratorRuntime);

export default function* startSagas() {
  yield fork(watchMap);
}
