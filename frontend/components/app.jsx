import React from 'react';
import Index from './index';
import NavbarContainer from './nav/navbar_container';
import Meetup from './nav/meetup_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import FooterContainer from './footer/footer_container';
import EventsContainer from './events/events_container';
import GroupsContainer from './groups/groups_container';
import CreateContainer from './groups/create_container';
import GroupShowContainer from './groups/group_show_container';
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
            <Route path="/meetup" component={GroupsContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route exact path='/groups/:groupId/' component={GroupShowContainer} />
            {/* <GroupsContainer/> */}
            <FooterContainer/>

        </header>

    </div>
);

export default App;