import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="nav-bar">
   
        <Link to="/" className="logo">Meetup</Link>
        <h2>The real world is calling</h2>
        <Link to="./login">Log in</Link>
        <div>
            <Link to="./register">Sign up</Link>
        </div>
    </div>
)
