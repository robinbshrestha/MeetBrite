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
            <div className="box-container">
                    Your Groups
                <div>
                  <ul className="groups-grid">
                        {groups}
                    </ul>
                </div>
            </div>
        )


    }
}

export default Groups;