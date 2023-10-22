import 'bootstrap/dist/css/bootstrap.css';
import './ToDo.scss';


const ToDo = ({ todo, onCompleteToDo, onDelete }) => {

  const completeHandler = (event) => {
    onCompleteToDo(todo.id, event.target.checked);
  };

  const deleteHandler = () => {
    onDelete(todo.id);
  };

  const completeToDoClass = todo.isCompleted ? 'todo-complete' : '';


  return (
    <div className='d-flex justify-content-between align-items-center'>
      <input className="form-check-input mx-2 my-0 p-3 border-0 shadow-none my-checkbox" type="checkbox" onChange={completeHandler} checked={todo.isCompleted} />

      <p className={`m-0 fs-4 me-auto my-todo-text ${completeToDoClass}`}>{todo.title}</p>

      <button type="button" className="btn-close mx-2 shadow-none" onClick={deleteHandler}></button>
    </div>
  );
};


export default ToDo;