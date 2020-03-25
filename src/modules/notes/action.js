import { AXIOS_INSTANCE } from "../../config/axiosConfig"
import { store as configureStore } from '../../index'

export const ACTION_TYPES = {
    GET_ALL_NOTES_SUCCESS: "GET_ALL_NOTES_SUCCESS",
    GET_ALL_NOTES_FAILED: "GET_ALL_NOTES_FAILED"
}

/* 
*This method will get all notes data fro json server */
export function getAllNotesFromServer() {
    AXIOS_INSTANCE.get("/notes")
        .then((response) => {
            /* Dispatch an action by sending data as paraeter */
            configureStore.dispatch(sendAllNotesToReducer(response.data));
        }).catch((error) => {
            /* Catching error */
            console.log("ERROR ::: ", error)
        })
}

/* 
*This methos will send notes data to the Notes Reducer */
function sendAllNotesToReducer(notes) {
    return {
        type: ACTION_TYPES.GET_ALL_NOTES_SUCCESS,
        data: notes
    }
}