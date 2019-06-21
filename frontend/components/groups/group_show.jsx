import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
    constructor(props) {
        super(props)
        this.joinGroup = this.joinGroup.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchGroup(this.props.match.params.groupId);

    }

    componentDidUpdate(prevProps) {
        if (prevProps.group.id != this.props.group.id) {
            this.props.fetchGroup(this.props.match.params.groupId);
        }
    }

    joinGroup(e) {
        e.preventDefault();
        this.props.joinGroup(this.props.group.id);
    }

    leaveGroup(e) {
        e.preventDefault();
        this.props.leaveGroup(this.props.group.id);
    }

    
    render() {
        let photo;
        let showit;
        let yaaa;

        if (Object.values(this.props.group).length === 0) { return null; }
        else if (!this.props.currentUser) {
            showit = <Link className="link-join" to="/login">Join Group</Link>
        } 
        else if ((this.props.currentUser) && (!this.props.group.members.includes(this.props.currentUser.id))) {
            showit = <Link className="link-join" onClick={this.joinGroup}>Join Group</Link>
        } else {
            showit = <Link className="link-join" onClick={this.leaveGroup}>Leave Group</Link>
        }
        
        if (Object.values(this.props.group).length === 0) { return null; }
        else if (this.props.currentUser.id === this.props.group.organizer.id) {
            yaaa = "manage"
        } else {
            yaaa = "nomanage"
        }
    
        if (this.props.group && this.props.group.photo) {
            photo = <div className='group-photo'><img src={this.props.group.photo} /></div>
        } else {
            photo = <div className='group-photo'><img src="https://meetbrite-seeds.s3.amazonaws.com/photo9.jpg" /></div>
        }

        let numMem;
        if (this.props.group.membersarray === 1) {
            numMem = <label className="show-mem">{this.props.group.membersarray} Member</label>

        } else {
            numMem = <label className="show-mem">{this.props.group.membersarray} Members</label>
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
                            {numMem}
                        </div>
                        <div>
                            <i id="show-user" className="fa fa-user" aria-hidden="true"></i>
                            <label className="show-user">Organized by {this.props.group.organizer.name}</label>
                        </div>
                        {showit}
                        <div className={yaaa}> <Link className="link-join" to={`/groups/${this.props.group.id}/manage`}>Manage Group</Link></div>
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