import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import 'font-awesome/css/font-awesome.css';

import App from './app';
import Signin from './scenes/signin';
import Feature from './scenes/feature';
import RequireAuth from './components/require-auth';
import Logo from './components/logo';
import LanguageSwitcher from './components/language-switcher';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { ACCESS_TOKEN } from './storage/types';
import './styles.css';
import './responsive.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem(ACCESS_TOKEN);
if (token) {
  store.dispatch({
    type: AUTH_USER,
  });
}
const languages = [
  { id: 'ru', title: 'Русский' },
  { id: 'en', title: 'English' },
];
const socialsProviders = [
  { provider: 'facebook' },
  { provider: 'vk' },
  { provider: 'yandex' },
  { provider: 'google-plus' },
];

const renderSignin = props => (
  <div>
    <Logo />
    <Signin minLength={6} socials={socialsProviders} withSocials {...props} />
    <LanguageSwitcher languages={languages} />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={RequireAuth(Feature)} />
        <Route path="signin" component={renderSignin} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
