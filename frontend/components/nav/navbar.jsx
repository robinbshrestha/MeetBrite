import React from 'react';
import { Link } from 'react-router-dom';


// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <p>Hello, {currentUser.name}</p>
//             <button onClick={logout}>Log Out</button>
//         </div>
//     ) : (
//         <div>
//             <h2>The real world is calling</h2>
//             <Link to="./login">Log in</Link>
//             <div>
//                 <Link to="./register">Sign up</Link>
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
    <div>
        <h2>The real world is calling</h2>
        <Link to="./login">Log in</Link>
        <div>
            <Link to="./register">Sign up</Link>
        </div>
    </div>
)