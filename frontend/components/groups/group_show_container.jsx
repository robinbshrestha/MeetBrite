import {connect} from 'react-redux';
import {fetchGroup, createMembership, deleteMembership } from '../../actions/group_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
    
    return {
        currentUser: state.session.currentUser,
        group: state.entities.groups[ownProps.match.params.groupId] || {},
        
    }
    // const users = state.entities.users; 
    // return {
    //     group,
    //     currentUser,
    //     organizer
    // };
};

const mdp = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
        joinGroup: id => dispatch(createMembership(id)),
        leaveGroup: id => dispatch(deleteMembership(id))
    }
}

export default connect(msp, mdp)(GroupShow);