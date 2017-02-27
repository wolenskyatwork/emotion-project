import { combineReducers } from 'redux';
import mapbox from './mapbox';
import location from './location';

const rootReducer = combineReducers({
  mapbox,
  location,
});

export default rootReducer;
