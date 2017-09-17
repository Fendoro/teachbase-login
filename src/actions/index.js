import axios from 'axios';
import { hashHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SET_LNG } from './types';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../storage/types';
import { CLIENT_ID, CLIENT_SECRET } from '../secrets';

const ROOT_URL = 'http://s1.teachbase.ru/mobile/v1';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

function authUser({ email, password }, action, error, remember) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/${action}`,
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: email,
        password,
        grant_type: 'password',
      },
    )
      .then((response) => {
        dispatch({
          type: AUTH_USER,
        });
        if (remember) {
          const { access_token, refresh_token } = response.data;
          localStorage.setItem(ACCESS_TOKEN, access_token);
          localStorage.setItem(REFRESH_TOKEN, refresh_token);
        }
        hashHistory.push('/feature');
      })
      .catch(({ response }) => {
        dispatch(authError(error || response.data.error));
      });
  };
}

export function signinUser({ email, password }, remember) {
  return authUser({ email, password }, 'oauth/token', 'Wrong email or password.', remember);
}

export function signoutUser() {
  localStorage.removeItem(ACCESS_TOKEN);
  return {
    type: UNAUTH_USER,
  };
}

export function changeLanguage(lng) {
  return {
    type: SET_LNG,
    payload: lng,
  };
}
