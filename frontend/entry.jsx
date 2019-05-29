import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.SessionApiUtil = {};
    window.SessionApiUtil.signup = SessionApiUtil.signup;
    window.SessionApiUtil.login = SessionApiUtil.login;
    
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to MeetBrite</h1>, root)

})




