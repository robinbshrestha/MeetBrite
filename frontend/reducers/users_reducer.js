import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser});
        // case RECEIVE_GROUP:
        //     const newState = merge({}, state, { [action.user.id]: action.user });
        //     newState[action.current_user.id].group_memberships = action.current_user.group_memberships;
        //     return newState;
        default:
            return state;
    }
};

export default usersReducer;