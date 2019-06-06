import React from 'react';
import { Link } from 'react-router-dom';


export default ({currentUser, logout}) => {

    return (
        <div className="mu-container">
            <div className="mu-find">
                <div className="mu-find-text">
                    <text>Find your next event</text>
                    <div>6 events in your groups · 3453 events near you</div>
                </div>
                
            </div>

        </div>

    )
}