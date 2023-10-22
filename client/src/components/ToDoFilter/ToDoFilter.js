import 'bootstrap/dist/css/bootstrap.css';


const ToDoFilter = ({ onFilterAllToDo, onFilterNewToDo, onFilterCompleteToDo }) => {

  return (
    <div className='mt-4 mb-3 d-flex justify-content-evenly align-items-center'>
      <button type="button" className="btn btn-secondary shadow-sm" onClick={onFilterAllToDo}>All</button>
      <button type="button" className="btn btn-secondary shadow-sm" onClick={onFilterNewToDo}>New</button>
      <button type="button" className="btn btn-secondary shadow-sm" onClick={onFilterCompleteToDo}>Completed</button>
    </div>
  );
};


export default ToDoFilter;