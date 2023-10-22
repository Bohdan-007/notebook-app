import ToDo from '../ToDo/ToDo';

import 'bootstrap/dist/css/bootstrap.css';
import './ToDoList.scss';


const ToDoList = ({ todos, onCompleteToDo, onDelete }) => {

  const completeToDoHandler = (id, isComplete) => {
    onCompleteToDo(id, isComplete);
  };

  const deleteHandler = (id) => {
    onDelete(id);
  };


  return (
    <ul className="m-0 p-1 todo-list">
      {
        todos.map((todo, idx) => <li key={idx} className="my-3 p-2 rounded-3 shadow-sm bg-success-subtle my-li"><ToDo todo={todo} onCompleteToDo={completeToDoHandler} onDelete={deleteHandler} /></li>)
      }
    </ul>
  );
};


export default ToDoList;