import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';



const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login'
    };
};

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);