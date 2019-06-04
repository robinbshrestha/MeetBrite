import React from 'react';
import { Link } from 'react-router-dom';

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <p>Hello, {currentUser.name}</p>
//             <Link to="/" onClick={logout}>Log Out</Link>
//             {/* <button onClick={logout}>Log Out</button> */}
            
//         </div>
//     ) : (
//     <div>
//         <h2>Find your next event</h2>
//         <div>
//             <Link to="/">Log Out</Link>
//         </div>
//     </div>
//         )

//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

export default ({currentUser, logout}) => {

    return (
        <div className="mu-container">
            <div className="mu-find">
                <div className="mu-find-text">
                    <text>Find your next event</text>
                    <div>1 event in your groups · 5000 events near you</div>
                </div>
                
            </div>

        </div>

        // <div>
        //     <p>Hello, {currentUser.name}</p>
        //     <Link to="/" onClick={logout}>Log Out</Link>
        // </div>
    )
}