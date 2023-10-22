import Note from "../Note/Note";

import './NotesList.scss';


const NotesList = ({ notes, onDelete }) => {

  const deleteHandler = (id) => {
    onDelete(id);
  };


  return (
    <ul className="m-0 p-0 notes-list">
      {
        notes.map((note, idx) => <li key={idx} className="p-2"><Note note={note} onDelete={deleteHandler} /></li>)
      }
    </ul>
  );
};


export default NotesList;