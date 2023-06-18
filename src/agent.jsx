import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

//this file contains the whole apis that will be called in the whole application.
const Notes = {
    allNotes :()=>axios.get(`notekeeper/`), // api for displaying all the notes.
    noteByID :(id)=>axios.get(`notekeeper/${id}/`), // api for getting a note by its id.
    createNote :(NoteKeeperList)=>axios.post(`notekeeper/`,NoteKeeperList), // api for creating a note.
    updateNote:(id,NoteKeeperList)=>axios.put(`notekeeper/${id}/`,NoteKeeperList), // api for updating a note by its id.
    deleteNote:(id)=>axios.delete(`notekeeper/${id}/`) // api for deleting a note.

}

const agent ={Notes}


export default agent;