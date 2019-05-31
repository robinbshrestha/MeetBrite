import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Meetup from './meetup';

const msp = state => {
    return {
        currentUser: state.session.currentUser,

    }                       
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Meetup);
