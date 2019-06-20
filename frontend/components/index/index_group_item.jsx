import React from 'react';
import { Link } from 'react-router-dom';

const IndexGroupItem = props => {
    return (
        <div>
            <Link className="index-link" to={`/groups/${props.group.id}`}>
                <div>{props.group.title}</div>
            </Link>
        </div>

    )
}

export default IndexGroupItem;