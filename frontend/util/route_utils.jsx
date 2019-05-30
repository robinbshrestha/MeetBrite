import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ path, loggedIn, component: Component }) => (
    <Route 
    path={path}
    render={props => (
        loggedIn ? <Redirect to="/meetup" /> : <Component {...props} />
    )} />
    )


const Protected = ({ component: Component, path, loggedIn }) => (
    <Route path={path} render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/register" />
    )} />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp, undefined)(Protected))


