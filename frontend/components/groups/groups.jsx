import React from 'react';
import { Link } from 'react-router-dom';

class Groups extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const loggedin = () => (
            <div className="groups">
                <div className="groups-grid1">
                    <div className="grid1-box1">
                        groups go here
                    </div>
                </div>
                <div className="groups-grid2">
                    more groups
                </div>
                <div className="groups-grid3">
                    groups
                </div>
            </div>
        )

        return this.props.currentUser ? loggedin() : null;




    }
}

export default Groups;