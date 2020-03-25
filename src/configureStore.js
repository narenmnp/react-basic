import { createStore } from "redux";
import { rootReducer, initialState } from './rootReducer'


let configureStore = createStore(
    rootReducer,
    initialState
)

export default configureStore;