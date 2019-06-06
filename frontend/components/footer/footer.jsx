import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render () {
        let nofooter;
        if (this.props.pathname === '/register') {
            nofooter = 'nofooter';
        } else if (this.props.pathname === '/login') {
            nofooter = 'nofooter';
        } else {
            nofooter = 'footer';
        }

        return (
            <div id={nofooter}>
                <Link to="/create" className="footer-start">Start a new group</Link>
                <div className="footer-line">
                <div className="footer-link-box">
                    <a href="https://www.linkedin.com/in/robin-shrestha-5772b3138/" target="_blank"><img className="footer-link" src="https://meetbrite-seeds.s3.amazonaws.com/linkedin.png" /></a>
                    <a href="https://github.com/robinbshrestha" target="_blank"><img className="footer-link" src="https://meetbrite-seeds.s3.amazonaws.com/github.jpg" /></a>
                    
                </div>
                </div>
            </div>
        );



    }
}

export default Footer;