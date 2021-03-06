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
        let showjoin;
        let showmanage;
        let avatar;


        if (Object.values(this.props.group).length === 0) { return null; }
        else if (!this.props.currentUser) {
            showjoin = <Link className="link-join" to="/login">Join Group</Link>
        } 
        else if ((this.props.currentUser) && (!this.props.group.members.includes(this.props.currentUser.id))) {
            showjoin = <Link className="link-join" onClick={this.joinGroup}>Join Group</Link>
        } else {
            showjoin = <Link className="link-join" onClick={this.leaveGroup}>Leave Group</Link>
        }
        
        if (!this.props.currentUser) {
            showmanage = "nomanage"
        } else if (this.props.currentUser.id === this.props.group.organizer.id) {
            showmanage = "manage"
            avatar = <img src="https://meetbrite-seeds.s3.amazonaws.com/avatar.png" className="avatar" />
        } else {
            showmanage = "nomanage"
        }
        // if (Object.values(this.props.group).length === 0) { return null; }
        // else if (this.props.currentUser.id === this.props.group.organizer.id) {
        //     showmanage = "manage"
        // } else {
        //     showmanage = "nomanage"
        // }
    
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

        
    


        // if (!this.props.currentUser) {return null}
        // else if (this.props.group.organizer.id === this.props.currentUser.id) {
        //     avatar = <img src="https://meetbrite-seeds.s3.amazonaws.com/avatar.png" className="avatar"/>
        // }

        // const memberAvatars = this.props.group.member_avatars.map((avatar, idx) => <li key={idx}><img src={avatar} className='avatar' /></li>);
        const memberAvatars = this.props.group.members.map((avatar, idx) => <li key={idx}><img src="https://meetbrite-seeds.s3.amazonaws.com/avatar.png" className='avatar' /></li>);

        

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
                        {showjoin}
                        <div className={showmanage}> <Link className="link-join" to={`/groups/${this.props.group.id}/manage`}>Manage Group</Link></div>
                    </div>
                </div>

                <div className="group-bottom">
                    <div className='group-show-line'>
                        <div>
                            <div className='about-events'>
                                <div className='about-tab'>About</div>
                                <div className='events-tab'>Events</div>
                                <div>Members</div>
                                <div>Photos</div>
                                <div>Discussions</div>
                            </div>
                            <div className='membership-button-div'>

                            </div>
                        </div>
                    </div>


                <div className='show-bottom'>
                    <h1 className='show-description-box'>
                        What we are about
                    </h1>
                    <div>
                        <div className='show-description'>{this.props.group.description}</div>
                        <div className='show-location'> </div>
                    </div>
                    

                        <div className='right-box'>
                            <div className='right-org'>
                                <h3>Organized By</h3>
                                <div>
                                    <div>{avatar}</div>
                                    <div>{this.props.group.organizer.name}</div>
                                </div>
                            </div>
                            <div className='right-members'>
                                <h3>Members</h3>
                                <div>
                                    <ul>{memberAvatars}</ul>
                                </div>
                            </div>
                        </div>
                
                </div>

                </div>
            </div>
        )
    }
}

export default GroupShow;