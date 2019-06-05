import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class Groups extends React.Component {
    componentDidMount() {
        this.props.fetchGroups();
    }


    render() {
        let nogroups;
        if (this.props.pathname !== '/meetup') {
            nogroups = "nogroups";
        } else {
            nogroups = "groups";
        }

        let groups = this.props.groups.map(group =>
            <GroupIndexItem
            key={group.id}
            group={group} />)

      return (
            <div id="groups">
                    Your Groups
                    <ul>
                  <li>{groups}</li>
                    </ul>
                <div className="groups-grid1">
                    <div className="grid1-box1">
                        adfsfdsa
                    </div>
                </div>
                <div className="groups-grid2">
                    <text className="text1">Full Stack Coding</text>
                </div>
                <div className="groups-grid3">
                    <text className="text1">NYC Indie Film Collective</text>
                </div>
            </div>
        )


    }
}

export default Groups;