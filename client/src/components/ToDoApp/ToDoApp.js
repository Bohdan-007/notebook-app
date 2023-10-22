import { useEffect, useState } from "react";
import ToDoCreator from "../ToDoCreator/ToDoCreator";
import SearchToDo from "../SearchToDo/SearchToDo";
import ToDoFilter from "../ToDoFilter/ToDoFilter";
import ToDoList from "../ToDoList/ToDoList";
import { getToDos, updateToDo, deleteToDo } from "../../Services/ToDoService";

import 'bootstrap/dist/css/bootstrap.css';


const ToDoApp = () => {
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState(toDos);

  const fetchData = async () => {
    try {
      const data = await getToDos();
      setToDos(data);
      setFilteredToDos(data);
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToDoHandler = () => {
    fetchData();
  };

  const completeToDoHandler = (id, isCompleted) => {
    const toDoToUpdate = toDos.filter(todo => todo.id === id);
    const idx = toDos.indexOf(toDoToUpdate[0]);
    const updatedToDo = { ...toDoToUpdate[0], isCompleted };

    const newArray = [...toDos];
    newArray.splice(idx, 1, updatedToDo);
    setToDos(newArray);
    setFilteredToDos(newArray);

    updateToDo(id, updatedToDo);
  };

  const deleteToDoHandler = (id) => {
    const filteredToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredToDos);
    setFilteredToDos(filteredToDos);
    deleteToDo(id);
  };


  const searchToDoHandler = (text) => {
    const array = toDos
    const filteredArray = array.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()));

    setFilteredToDos(filteredArray);
  };


  const filterAllToDoHandler = () => {
    setFilteredToDos(toDos);
  };

  const filterNewToDoHandler = () => {
    setFilteredToDos(toDos);
  };

  const filterCompleteToDoHandler = () => {
    const filterToDo = toDos.filter(todo => todo.isCompleted === true);
    setFilteredToDos(filterToDo);
  };


  return (
    <div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <ToDoCreator onAddToDo={addToDoHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <SearchToDo onSearchToDo={searchToDoHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <ToDoFilter
            onFilterAllToDo={filterAllToDoHandler}
            onFilterNewToDo={filterNewToDoHandler}
            onFilterCompleteToDo={filterCompleteToDoHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ToDoList todos={filteredToDos} onCompleteToDo={completeToDoHandler} onDelete={deleteToDoHandler} />
        </div>
      </div>

    </div>
  );
};


export default ToDoApp;