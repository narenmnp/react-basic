import { combineReducers } from "redux";
import notesReducer from './modules/notes/notesReducer'

export const initialState = {}

export const rootReducer = combineReducers({
    notesReducer
})