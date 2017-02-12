import { MAP }  from '../constants/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAP.MOUNTED:
      return [...state];
    default:
      return state;
  }
}
