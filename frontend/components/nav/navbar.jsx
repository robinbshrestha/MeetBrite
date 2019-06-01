import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <div>
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <Link to="/" className="logo">MeetBrite</Link>
                </div>    
                <div className="nav-bar-right">
                    <Link to="/" className="group">Start a new group</Link>
                    <Link to="/login" className="nav">Log in</Link>
                    <Link to="/register" className="nav">Sign up</Link>
                </div>
            </div> 
            


        </div>
    </div>
)
