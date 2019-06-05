import React from 'react';
import { connect } from 'react-redux';
import Groups from './groups';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        pathname: ownProps.location.pathname
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user))
    };
};

export default withRouter(connect(msp, mdp)(Groups));