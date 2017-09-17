import { SET_LNG } from '../actions/types';

const INIT_STATE = {
  current: 'en',
};
export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case SET_LNG:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
