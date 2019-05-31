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
                    <Link to="/login" className="login">Log in</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </div> 
            

            <div class="video-section">

            <video autoPlay loop muted>
                    <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4" />
            </video>


            </div>

            <div className="center-text"> 
                <h2>The real world is calling</h2>
                <h3>Join a local group to meet people, try something new, or do more of what you love.</h3>
            </div>
            <span className="center-button"> 
                <h4>Join Meetup</h4>
            </span>
        </div>
    </div>
)
