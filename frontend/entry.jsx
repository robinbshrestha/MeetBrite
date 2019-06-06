import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
// import * as SessionApiUtil from './util/session_api_util';
// import * as GroupApiUtil from './util/group_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // testing
    
    // window.dispatch = store.dispatch;
    // window.SessionApiUtil = {};
    // window.SessionApiUtil.signup = SessionApiUtil.signup;
    // window.SessionApiUtil.login = SessionApiUtil.login;
    // window.GroupApiUtil = {};
    // window.GroupApiUtil.createGroup = GroupApiUtil.createGroup;
    // window.GroupApiUtil.fetchGroup = GroupApiUtil.fetchGroup;

    
    let preloadedState = undefined;
    if (window.currentUser){
        preloadedState = {
        session: {
            currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store}/>, root)
    window.getState = store.getState;

})




