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
            <h3 className="grid-text">{props.group.title}</h3>
        </Link>
            <div className='grid-group'>{photo}</div>
            {/* <div className='grid-group'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo3.png"/></div>
            <div className='grid-group'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo4.jpg"/></div>
            <div className='grid-group'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo5.png"/></div>
            <div className='grid-group'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo6.jpeg"/></div>
            <div className='grid-group'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo7.jpeg"/></div> */}
        </div>
        
    )
}

export default GroupIndexItem;