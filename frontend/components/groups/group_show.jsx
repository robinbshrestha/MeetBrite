import React from 'react';
import {Link} from 'react-router-dom';

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render() {
        let photo;

        if (this.props.group && this.props.group.photo) {
            photo = <div id='group-photo'><img src={this.props.group.photo} /></div>
        }
        
        return (
            <div className='show-all'>
                <div className='show-top'>
                    <div>
                        {photo}
                    </div>
                    <div className='show-text'>
                        <h1>{this.props.group.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupShow;