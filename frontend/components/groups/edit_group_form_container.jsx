import { connect } from 'react-redux';
import EditGroupForm from './edit_group_form';
import {fetchGroup, updateGroup, deleteGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    const defaultGroup = {
        title: '',
        description: '',
        location_id: 1,
        organzer_id: 2
    };

    const group = state.entities.groups[ownProps.match.params.groupId] || defaultGroup;
    const formType = 'Update Group'
    return {
        currentUser: state.session.currentUser,
        group,
        formType
        
    }
}

const mdp = dispatch => {
    return {
        fetchGroup: id => dispatch(fetchGroup(id)),
        action: group => dispatch(updateGroup(group)),
        deleteGroup: id => dispatch(deletegroup(id))
    };
};

export default connect(msp, mdp)(EditGroupForm);