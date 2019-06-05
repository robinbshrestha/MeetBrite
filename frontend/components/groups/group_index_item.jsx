import React from 'react';
import {Link} from 'react-router-dom';

const GroupIndexItem = props => {
    let photo;
    if (props.group.photo) {
        photo = <img src={props.group.photo} />;
    }

    return (
        <div>
        <Link to={`/groups/${props.group.id}`}>
            <h3>{props.group.title}</h3>
        </Link>
            <div className='grid-group'>{photo}</div>
            
        </div>
        
    )
}

export default GroupIndexItem;