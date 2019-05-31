import React from 'react';
import Navbar from './nav/navbar';
import Meetup from './nav/meetup_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import { 
    AuthRoute,
    ProtectedRoute
 } from '../util/route_utils';

const App = () => (
    <div>
        <header>
            <Route path="/register" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route exact path="/" component={Navbar} />
            <Route path="/meetup" component={Meetup} />

        </header>
        
    </div>
);

export default App;