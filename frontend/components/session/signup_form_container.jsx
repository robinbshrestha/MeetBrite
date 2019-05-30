import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mdp = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SignupForm);