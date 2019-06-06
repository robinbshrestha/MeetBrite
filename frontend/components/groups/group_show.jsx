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
                        <i id="show-icon" className="fas fa-map-marker-alt"></i>
                            <label className="show-city">New York, NY</label>
                        <div> 
                        <i id="show-people" className="fas fa-users"></i>
                            <label className="show-mem">232 members</label>
                        </div>
                        <div>
                            <i id="show-user" class="fa fa-user" aria-hidden="true"></i>
                            <label className="show-user">Organized by Demo User</label>
                        </div>
                        <div className="show-join"><Link className="link-join" onClick={this.handleSubmit}>Join Group</Link>
                        </div>
                    </div>
                </div>

                <div className='show-bottom'>
                    <h1 className='show-description'>
                        What we are about
                    </h1>
                    <div>
                        <div className='show-description'>{this.props.group.description}</div>
                        <div className='show-location'> </div>

                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default GroupShow;