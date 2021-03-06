import React from 'react';
import {Link} from 'react-router-dom';

const GroupIndexItem = props => {
    let photo;
    if (props.group.photo) {
        photo = <img src={props.group.photo} />;
    } else { photo = <img src="https://meetbrite-seeds.s3.amazonaws.com/photo4.jpg" />

    }

    let numMem;
    if (props.group.membersarray === 1) {
        numMem = <div className="grid-text">{props.group.membersarray} Member</div>


    } else {
        numMem = <div className="grid-text">{props.group.membersarray} Members</div>

    }

    return (
        <div>
        <Link className="grid-link-text" to={`/groups/${props.group.id}`}>
            <h3 className="grid-text">{props.group.title}</h3>
                {numMem}
            <div className='grid-group'>{photo}</div>
        </Link>

        </div>
        
    )
}

export default GroupIndexItem;