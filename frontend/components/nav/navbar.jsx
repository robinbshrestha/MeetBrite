import React from 'react';
import { Link } from 'react-router-dom';

// const Navbar = ({currentUser, logout}) => {
//     return (
//         <button onClick={() => logout(currentUser)}>Logout</button>
//     )
// }

// export default Navbar

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <p>Hello, {currentUser.id}</p>
//             <button onClick={() => logout}>Log Out</button>
//         </div>
//     ) : (
//         <div>
//             <h2 className="title-text">The real world is calling</h2>
//             <Link to="/login">Log in</Link>
//             <div>
//                 <Link to="/register">Sign up</Link>
//             </div>           
//         </div>
//     )
//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

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
