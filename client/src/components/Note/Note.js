import 'bootstrap/dist/css/bootstrap.css';
import './Note.scss';


const Note = ({ note, onDelete }) => {

  const deleteHandler = () => {
    onDelete(note.id);
  };

  return (
    <div style={{ backgroundColor: note.bgColor }} className="card shadow-sm my-card">
      <div className="card-body position-relative text-center">
        <button type="button" className="btn-close d-none position-absolute top-0 end-0 shadow-none my-btn" onClick={deleteHandler}></button>
        <h5 className="card-title mb-3">{note.title}</h5>
        <p className="card-text font-monospace text-start">{note.body}</p>
      </div>
    </div>
  );
};


export default Note;