import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
<div className="video-container">
    <video id="video" autoPlay loop muted>
        <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4" />
    </video>
    <div className="overlay">
        <h2>The real world is calling</h2>
        <h3>Join a local group to meet people, try something new, or do more of what you love.</h3>
        <span className="center-button">
            <h4>Join Meetup</h4>
        </span>
    </div>
</div>
)