import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yesmenu: false,
        };

        this.yesmenu = this.yesmenu.bind(this);
        this.nomenu = this.nomenu.bind(this);
    }

    yesmenu(e) {
        e.preventDefault();

        this.setState({
            yesmenu: true,
        }, () => {
            document.addEventListener('click', this.nomenu);
        });
    }

    nomenu() {
        this.setState({ yesmenu: false }, () => {
            document.removeEventListener('click', this.nomenu);
        });
    }

    render() {

        const loggedout = () => (
            <div>
                <div>
                    <div className="nav-bar">
                        <div className="nav-bar-left">
                            <Link to="/" className="logo">MeetBrite</Link>
                        </div>
                        <div className="nav-bar-right">
                            <div className="start-group">
                                <Link className="group" to="/create">Start a new group</Link>
                            </div>
                            <div className="start-nav1">
                                <Link to="/login" className="nav">Log in</Link>
                            </div>
                            <div className="start-nav2">
                                <Link to="/register" className="nav">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        const loggedin = () => (
            <div>
                <div>
                    <div className="lognav-bar">
                        <div className="lognav-bar-left">
                            <Link to="/" className="loglogo">MeetBrite</Link>
                        </div>
                        <div className="lognav-bar-right">
                            <Link to="/create" className="loggroup">Start a new group</Link>
                            <Link to="/meetup" className="lognav">Explore</Link>
                            <div className="dropdown">
                                <i className="far fa-user-circle" onClick={this.yesmenu}></i>
                            </div>
                            {this.state.yesmenu ? (
                                <div className="navbar-dropdown">
                                    {/* <Link className="w3button" to="/" onClick={this.props.logout}>Log Out</Link> */}
                                    <button className="navbar-button" onClick={this.props.logout}>Log Out</button>
                                </div>
                            ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

        return this.props.currentUser ? loggedin() : loggedout();
    }
}

export default Navbar;

