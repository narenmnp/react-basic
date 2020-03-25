import { ACTION_TYPES } from "./action";

var initialState = {
    notesList: [],
    note: null
}
export default function notesReducer(state = initialState, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_NOTES_SUCCESS:
            /* Updates notes list with data received from action */
            newState.notesList = action.data;
            return newState;

        default:
            return newState
    }
}