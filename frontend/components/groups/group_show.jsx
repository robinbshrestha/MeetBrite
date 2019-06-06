import React from 'react';
import {Link} from 'react-router-dom';

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render() {
        let photo;

        if (this.props.group && this.props.group.photo) {
            photo = <div className='group-photo'><img src={this.props.group.photo} /></div>
        } else {
            photo = <div className='group-photo'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo9.jpg" /></div>
        }
        
        return (
            <div className='show-all'>
                <div className='show-top'>
                    <div className='show-photo'>
                        {photo}
                    </div>
                    <div className='show-text'>
                        <h1>{this.props.group.title}</h1>
                    </div>
                </div>

                <div className='show-bottom'>
                    <h1 className='show-what'>
                        What we are about
                    </h1>
                    <div className='show-description'>
                        <div>{this.props.group.description}</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default GroupShow;