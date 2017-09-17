import authReducer from '../src/reducers/auth';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../src/actions/types';

describe('auth reducer', () => {
  it('auth user', () => {
    let state = { authenticated: false, error: 'Wrong email' };
    state = authReducer(state, { type: AUTH_USER });
    expect(state).toEqual({ authenticated: true, error: null });
  });
  it('unauth user', () => {
    let state = { authenticated: true, error: null };
    state = authReducer(state, { type: UNAUTH_USER });
    expect(state).toEqual({ authenticated: false, error: null });
  });
  it('auth error', () => {
    let state = { authenticated: true, error: null };
    state = authReducer(state, { type: AUTH_ERROR, payload: 'Wrong password' });
    expect(state).toEqual({ authenticated: false, error: 'Wrong password' });
  });
});
