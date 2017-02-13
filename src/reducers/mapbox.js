import { MAP }  from '../constants/actionTypes';

const initialState = {
  mounted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAP.MOUNTED:
      return { ...state, mounted: true };
    default:
      return state;
  }
}
