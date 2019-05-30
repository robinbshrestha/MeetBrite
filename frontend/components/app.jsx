import React from 'react';
import Home from './home/home';
import Meetup from './nav/nav';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/meetup" component={Meetup} />
        </header>
        
    </div>
);

export default App;