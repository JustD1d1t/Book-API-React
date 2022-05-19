import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const SearchEngine = (props) => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const searchFilms = (e) => {
    e.preventDefault();
    navigate(`/search?search=${inputRef.current.value}`, { replace: true });
  };
  return (
    <>
      <h2>Search by phrase</h2>
      <form onSubmit={searchFilms}>
        <div>
          <label htmlFor="">
            <input type="text" placeholder="Search..." ref={inputRef} />
          </label>
          <button>Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchEngine;
