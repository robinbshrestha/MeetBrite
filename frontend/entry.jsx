import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// // testing
// // import * as SessionApiUtil from './util/session_api_util';
// // import * as GroupApiUtil from './util/group_api_util';

// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     // testing
    
//     // window.dispatch = store.dispatch;
//     // window.SessionApiUtil = {};
//     // window.SessionApiUtil.signup = SessionApiUtil.signup;
//     // window.SessionApiUtil.login = SessionApiUtil.login;
//     // window.GroupApiUtil = {};
//     // window.GroupApiUtil.createGroup = GroupApiUtil.createGroup;
//     // window.GroupApiUtil.fetchGroup = GroupApiUtil.fetchGroup;

    
//     let preloadedState = undefined;
//     if (window.currentUser){
//         preloadedState = {
//         session: {
//             currentUser: window.currentUser
//             }
//         }
//     }
//     const store = configureStore(preloadedState);

//     ReactDOM.render(<Root store={store}/>, root)
//     window.getState = store.getState;

// })



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TESTING
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // window.fetchGroupEvents = fetchGroupEvents;
    // window.fetchAllEvents = fetchAllEvents;
    // window.fetchEvent = fetchEvent;
    // window.createEvent = createEvent;
    // window.updateEvent = updateEvent;
    // window.deleteEvent = deleteEvent;

    // window.createMembership = createMembership;
    // window.deleteMembership = deleteMembership;
    //TESTING

    ReactDOM.render(<Root store={store} />, root);
});
