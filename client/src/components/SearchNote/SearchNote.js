import { useState } from "react";


const SearchNote = ({ onSearchNote }) => {
  const [search, setSearch] = useState('');

  const searchHandler = ({ target: { value } }) => {
    setSearch(value);
    onSearchNote(value);
  };


  return (
    <div className="my-5">
      <input type="text" className="form-control border-0 shadow-sm" placeholder="Search..." onChange={searchHandler} value={search} />
    </div>
  );
};


export default SearchNote;