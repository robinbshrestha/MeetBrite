import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors} from '../../actions/session_actions';
import LoginForm from './login_form';


const msp = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mdp = dispatch => {
    return {
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(LoginForm);