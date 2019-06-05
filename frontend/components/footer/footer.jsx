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
                <div className="footer-box1">
                    <a href="https://github.com/robinbshrestha"><i className="fab fa-github"></i></a>
                </div>
                <div className="footer-box2">
                </div>
                <div className="footer-box3">
                </div>
            </div>
        );



    }
}

export default Footer;