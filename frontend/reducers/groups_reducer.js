import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state);
    let newState;
    switch (action.type) {
        // debugger
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            newState = merge({}, state, { [action.group.id]: action.group });
            newState[action.group.id].members = action.group.members;
            return newState;
            
            // newState = merge({}, state);
            // delete newState[action.group.id];
            // return merge({}, newState, {[action.group.id]: action.group});

        case REMOVE_GROUP:
            newState = merge({}, state);
            delete newState[action.groupId];
            return newState;
        default: 
            return state;
    }
};
// debugger
export default groupsReducer;   