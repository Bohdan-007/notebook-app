import axios from "axios";


const URL = 'http://localhost:3000/notes';

const getNotes = async () => axios.get(URL).then(response => response.data);
const addNote = (newNote) => axios.post(URL, newNote);
const deleteNote = (id) => axios.delete(`${URL}/${id}`);


export {
  getNotes,
  addNote,
  deleteNote
};