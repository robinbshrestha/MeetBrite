import React from 'react';
import Index from './index';
import NavbarContainer from './nav/navbar_container';
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
            <NavbarContainer/>
            <Route path="/register" component={SignupFormContainer} />
            
            <Route exact path="/" component={Index} />
            <Route path="/meetup" component={Meetup} />
            <Route path="/login" component={LoginFormContainer} />

        </header>

    </div>
);

export default App;