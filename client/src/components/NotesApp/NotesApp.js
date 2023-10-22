import { useEffect, useState } from "react";
import NoteEditor from "../NoteEditor/NoteEditor";
import NotesList from "../NotesList/NotesList";
import SearchNote from "../SearchNote/SearchNote";
import { getNotes, deleteNote } from "../../Services/NotesService";


const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchNoteHandler = async (text) => {
    const filterNotes = await getNotes();
    const filteredNotes = filterNotes.filter(({ title, body }) => title.toLowerCase().includes(text.toLowerCase()) || body.toLowerCase().includes(text.toLowerCase()));

    setNotes(filteredNotes);
  };

  const addNoteHandler = () => {
    fetchData();
  };

  const deleteNoteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    deleteNote(id);
  };


  return (
    <div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <NoteEditor onAddNote={addNoteHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <SearchNote onSearchNote={searchNoteHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <NotesList notes={notes} onDelete={deleteNoteHandler} />
        </div>
      </div>

    </div>
  );
};


export default NotesApp;