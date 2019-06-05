import React from 'react';
import {Link} from 'react-router-dom';

const GroupIndexItem = props => {

    return (
        <div>
        <Link to={`/groups/${props.group.id}`}>
            <h3>{props.group.description}</h3>
        </Link>
        </div>
    )
}

export default GroupIndexItem;