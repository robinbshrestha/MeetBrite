import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class Groups extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchGroups();
    }


    render() {

        if (this.props.groups.length === 0) {
            return null;
        }
        
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
              <div className="box-con-text">Your Groups</div>
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