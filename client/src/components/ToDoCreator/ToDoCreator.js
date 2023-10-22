import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { addToDo } from "../../Services/ToDoService";

import 'bootstrap/dist/css/bootstrap.css';


const ToDoCreator = ({ onAddToDo }) => {
  const [toDo, setToDo] = useState('');

  const addToDoHandler = (event) => {
    event.preventDefault();

    const newToDo = {
      title: toDo,
      isCompleted: false,
    };

    addToDo(newToDo);
    onAddToDo();

    setToDo('');
  };

  return (
    <form onSubmit={addToDoHandler} className="my-3" noValidate>
      <div className="mb-3">
        <input type="text" className="form-control border-0 shadow-sm" onChange={({ target: { value } }) => setToDo(value)} value={toDo} placeholder='ToDo...' />
      </div>

      <button type="submit" className="btn btn-success shadow-sm">Add ToDo</button>
    </form>
  );
};


export default ToDoCreator;