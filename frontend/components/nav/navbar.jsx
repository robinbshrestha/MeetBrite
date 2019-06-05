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
                            <Link to="/create" className="group">Start a new group</Link>
                            <Link to="/login" className="nav">Log in</Link>
                            <Link to="/register" className="nav">Sign up</Link>
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
                            <Link to="/meetup" className="lognav">Messages</Link>
                            <Link to="/meetup" className="lognav">Notifications</Link>
                            <div className="dropdown">
                                <i className="far fa-user-circle" onClick={this.yesmenu}></i>
                            </div>
                            {this.state.yesmenu ? (
                                <div>
                                    <button onClick={this.props.logout}>Log Out</button>
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

// export default () => (
//     <div>
//         <div>
//             <div className="nav-bar">
//                 <div className="nav-bar-left">
//                     <Link to="/" className="logo">MeetBrite</Link>
//                 </div>    
//                 <div className="nav-bar-right">
//                     <Link to="/" className="group">Start a new group</Link>
//                     <Link to="/login" className="nav">Log in</Link>
//                     <Link to="/register" className="nav">Sign up</Link>
//                 </div>
//             </div> 
//         </div>
//     </div>
// )

