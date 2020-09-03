import { noteData } from './firebaseConnect';
import { act } from 'react-dom/test-utils';
var redux = require('redux');

const noteInitialState = {
    isShowForm: true,
    editItem: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            return state
        case "CHANGE_STATUS":
            return { ...state, isShowForm: action.status }
        case "DELETE":
            noteData.child(action.id).remove();
            return state
        case "GET_DATA":
            return { ...state, editItem: action.item }
        case "UPDATE":
            noteData.child(action.item.id).update({
                noteTitle: action.item.noteTitle,
                noteContent: action.item.noteContent
            })
            return { ...state, editItem: action.item }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()))
})
export default store;