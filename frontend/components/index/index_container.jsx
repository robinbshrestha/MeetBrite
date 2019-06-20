import React from 'react';
import Index from './index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchGroups} from '../../actions/group_actions';

const msp = state => {
    return {
        groups: Object.values(state.entities.groups)
    };
};

const mdp = dispatch => {
    return {
        fetchGroups: () => dispatch(fetchGroups())
    };
};

export default withRouter(connect(msp, mdp)(Index));

