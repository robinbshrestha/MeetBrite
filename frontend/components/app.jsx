import React from 'react';
import Index from './index';
import NavbarContainer from './nav/navbar_container';
import Meetup from './nav/meetup_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import FooterContainer from './footer/footer_container';
import { 
    AuthRoute,
    ProtectedRoute
 } from '../util/route_utils';

const App = () => (
    <div>
        <header>
            <NavbarContainer/>
            <AuthRoute path="/register" component={SignupFormContainer} />
            
            <Route exact path="/" component={Index} />
            <ProtectedRoute path="/meetup" component={Meetup} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <FooterContainer/>

        </header>

    </div>
);

export default App;