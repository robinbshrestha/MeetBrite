import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <h5>Start a new group</h5>
            <h5>Log in
            <Link to="/login"/>
            </h5>
            <h5>Sign up</h5>


        )
    }
}

