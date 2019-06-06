import {connect} from 'react-redux';
import {fetchGroup} from '../../actions/group_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
    const group = state.entities.groups[ownProps.match.params.groupId];
    const currentUser = state.entities.users[state.session.id];
    const organizer = state.entities.users[group.organizer_id];

    return {
        group,
        currentUser,
        organizer
    };
};

const mdp = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),

    }
}

export default connect(msp, mdp)(GroupShow);