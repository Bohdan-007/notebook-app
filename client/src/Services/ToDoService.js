import axios from "axios";


const URL = 'http://localhost:3000/todos';

const getToDos = async () => axios.get(URL).then(response => response.data);
const addToDo = (newToDo) => axios.post(URL, newToDo);
const updateToDo = (id, updatedToDo) => axios.put(`${URL}/${id}`, updatedToDo);
const deleteToDo = (id) => axios.delete(`${URL}/${id}`);


export {
  getToDos,
  addToDo,
  updateToDo,
  deleteToDo
};