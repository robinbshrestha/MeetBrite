import { connect } from 'react-redux';
import CreateForm from './create';
import { createGroup } from '../../actions/group_actions';

const msp = state => {
    const group = {
        title: '',
        description: '',
        location_id: 1,
        organizer_id: 2

    };

    return {
        group,
        currentUser: state.session.currentUser
        // currentUser: state.entities.users[state.session.id]

    };


};

const mdp = dispatch => {
    return {
        createGroup: group => dispatch(createGroup(group))
    };
};

export default connect(msp, mdp)(CreateForm);