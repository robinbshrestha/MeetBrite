import React from 'react';
import {Link} from 'react-router-dom';

const GroupIndexItem = props => {
    let photo;
    if (props.group.photo) {
        photo = <img src={props.group.photo} />;
    } else { photo = <img src="https://meetbrite-seeds.s3.amazonaws.com/photo9.jpg" />

    }

    return (
        <div>
        <Link className="grid-link-text" to={`/groups/${props.group.id}`}>
            <h3 className="grid-text">{props.group.title}</h3>
        </Link>
            <div className='grid-group'>{photo}</div>
        </div>
        
    )
}

export default GroupIndexItem;