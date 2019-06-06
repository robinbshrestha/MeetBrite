import React from 'react';
import {Link} from 'react-router-dom';

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
    }

    render() {
        
    }
}