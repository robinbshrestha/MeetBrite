import React from 'react';
import { Link } from 'react-router-dom';
import IndexGroupItem from './index_group_item';

class Index extends React.Component{
    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {
        let groups;
        groups = this.props.groups.slice(0,5).map(group => 
           <IndexGroupItem
           key={group.id} 
           group={group} />)

        return (
            <div>
                <div className="video-container">
                    <video id="video" autoPlay loop muted>
                        <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4" />
                    </video>
                    <div className="overlay">
                        <h2>The real world is calling</h2>
                        <h3>Join a local group to meet people, try something new, or do more of what you love.</h3>
                        <span className="center-button">
                            <h4><Link className="index" to="/register">Join MeetBrite</Link></h4>
                        </span>
                    </div>
                </div>
                <div className="index-bottom">
                    <ul className="index-link">{groups}</ul>
                </div>
                <div className="index-border">

                </div>
            </div>   
        )
    }
}

export default Index;