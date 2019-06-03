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
            nomenu: true,
        }, () => {
            document.addEventListener('click', this.nomenu);
        });
    }

    nomenu(e) {
        e.preventDefault();
        this.setState({ yesmenu: false}, () => {
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
                            <Link to="/" className="group">Start a new group</Link>
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
                    <div className="nav-bar">
                        <div className="nav-bar-left">
                            <Link to="/" className="logo">MeetBrite</Link>
                        </div>
                        <div className="nav-bar-right">
                            <Link to="/" className="group">Start a new group</Link>
                            <Link to="/login" className="nav">bog in</Link>
                            <Link to="/register" className="nav">Sign up</Link>
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

