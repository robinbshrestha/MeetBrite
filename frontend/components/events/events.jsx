import React from 'react';
import { Link } from 'react-router-dom';

class Events extends React.Component {
    constructor(props){
        super(props);

    }

    render() {

        const loggedin = () => (
            <div className="events">
                <div className="events-grid1">
                    <div className="grid1-box1">
                        events go here
                    </div>
                </div>
                <div className="events-grid2">
                    calendar goes here
                </div>
                <div className="events-box3">
                </div>
            </div>
        )

        return this.props.currentUser ? loggedin() : null;




    }
}

export default Events;