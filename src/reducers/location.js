import { LOCATION }  from '../constants/actionTypes';

const initialState = {
  userLocation: {
    lat: 55.7,
    lng: 37.6,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOCATION.SUCCESS:
      return { ...state, userLocation: action.userLocation };
    default:
      return state;
  }
}
