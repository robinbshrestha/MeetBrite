import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import SignupForm from './session/signup_form';
const App = () => (
    <div>
        <header>
            <h1>MeetBrite app</h1>
            <Route path="/register" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
        </header>
        
    </div>
);

export default App;