import React from 'react';
import IndexContainer from './index/index_container';
import NavbarContainer from './nav/navbar_container';
import Meetup from './nav/meetup_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router-dom';
import FooterContainer from './footer/footer_container';
import EditGroupFormContainer from './groups/edit_group_form_container';
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
            
            <Route exact path="/" component={IndexContainer} />
            <ProtectedRoute path="/meetup" component={Meetup} />
            <Route path="/meetup" component={GroupsContainer} />
            <ProtectedRoute path="/groups/:groupId/manage" component={EditGroupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <Route path="/create" component={CreateContainer} />
            <Route exact path='/groups/:groupId/' component={GroupShowContainer} />
            <FooterContainer/>

        </header>

    </div>
);

export default App;