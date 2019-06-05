import React from 'react';
import { Link } from 'react-router-dom';

class Groups extends React.Component {

    render() {
        let nogroups;
        if (this.props.pathname !== '/meetup') {
            nogroups = "nogroups";
        } else {
            nogroups = "groups";
        }


      return (
            <div id={nogroups}>
                <div className="groups-grid1">
                    <div className="grid1-box1">
                        <text className="text1">The New York Python Meetup Group</text>
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