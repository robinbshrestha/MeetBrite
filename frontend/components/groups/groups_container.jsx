import React from 'react';
import { connect } from 'react-redux';
import Groups from './groups';
import { withRouter } from 'react-router-dom';
import { logout, login } from '../../actions/session_actions';
import { fetchGroups } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    return {
        // currentUser: state.session.currentUser,
        currentUser: state.entities.users[state.session.id],

        pathname: ownProps.location.pathname,
        groups: Object.values(state.entities.groups)
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user)),
        fetchGroups: () => dispatch(fetchGroups()),
    };
};

export default withRouter(connect(msp, mdp)(Groups));