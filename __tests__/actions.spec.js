import { changeLanguage } from '../src/actions';
import { SET_LNG } from '../src/actions/types';

describe('actions', () => {
  it('set language', () => {
    const lng = 'ru';
    const actionLng = changeLanguage(lng);
    expect(actionLng).toEqual({
      type: SET_LNG,
      payload: lng,
    });
  });
});
