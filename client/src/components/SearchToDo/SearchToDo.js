import { useState } from "react";


const SearchToDo = ({ onSearchToDo }) => {
  const [search, setSearch] = useState('');

  const searchHandler = ({ target: { value } }) => {
    setSearch(value);
    onSearchToDo(value);
    console.log(value);

  };


  return (
    <div className="mt-4">
      <input type="text" className="form-control border-0 shadow-sm" placeholder="Search..." onChange={searchHandler} value={search} />
    </div>
  );
};


export default SearchToDo;