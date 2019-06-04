import React from 'react';
import { connect } from 'react-redux';
import Groups from './groups';
import { logout, login } from '../../actions/session_actions';

const msp = state => {
    return {
        currentUser: state.session.currentUser

    }
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(Groups);