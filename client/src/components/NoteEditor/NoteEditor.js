import { useState } from "react";
import { addNote } from "../../Services/NotesService";

import 'bootstrap/dist/css/bootstrap.css';
import './NoteEditor.scss';


const colors = ['#ff867a', '#ffce77', '#ffff84', '#cdd7dc', '#79d6ff', '#a2ffeb', '#c7ff86'];

const NoteEditor = ({ onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [noteColor, setNoteColor] = useState('');


  const addNoteHandler = (event) => {
    event.preventDefault();

    const newNote = {
      title: noteTitle,
      body: noteBody,
      bgColor: noteColor,
    };

    addNote(newNote);

    onAddNote(newNote);

    setNoteTitle('');
    setNoteBody('');
    setNoteColor('');
  };


  return (
    <form onSubmit={addNoteHandler} className="my-3" noValidate>
      <div className="mb-3">
        <input type="text" className="form-control border-0 shadow-sm" onChange={({ target: { value } }) => setNoteTitle(value)} value={noteTitle} placeholder='Title' />
      </div>

      <div className="mb-3">
        <textarea style={{ backgroundColor: noteColor }} className="font-monospace form-control border-0 shadow-sm" onChange={({ target: { value } }) => setNoteBody(value)} value={noteBody} placeholder='Enter your note here...'></textarea>
      </div>

      <div className="row">
        <div className="col-12 col-sm-8 mb-3 mb-sm-0">
          {
            colors.map((color, idx) => {
              return <div key={idx} id={color}
                style={{ backgroundColor: color }}
                className="btn m-1 p-3 rounded-circle shadow-sm my-color"
                onClick={({ target: { id } }) => setNoteColor(id)}></div>
            })
          }
        </div>

        <div className="col-12 col-sm-4 text-center">
          <button type="submit" className="btn btn-success">Add Note</button>
        </div>
      </div>
    </form>
  );
};


export default NoteEditor;