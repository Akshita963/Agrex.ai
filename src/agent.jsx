import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const Notes = {
    allNotes :()=>axios.get(`notekeeper/`),
    noteByID :(id)=>axios.get(`notekeeper/${id}/`),
    createNote :(NoteKeeperList)=>axios.post(`notekeeper/`,NoteKeeperList),
    updateNote:(id,NoteKeeperList)=>axios.put(`notekeeper/${id}/`,NoteKeeperList),
    deleteNote:(id)=>axios.delete(`notekeeper/${id}/`)

}

const agent ={Notes}


export default agent;