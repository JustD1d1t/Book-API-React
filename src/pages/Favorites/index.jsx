import BookList from "../../components/books/BookList";
import BookContext from "../../context/books/bookContext";
import { useContext, useState, useEffect } from "react";

const Favorites = () => {
  const [books, setBooks] = useState([]);
  const bookContext = useContext(BookContext);

  useEffect(() => {
    setBooks(bookContext.favoriteBooks);
  }, [bookContext.favoriteBooks]);

  return (
    <>
      <h1>Favorites</h1>
      {books.length !== 0 ? (
        <BookList books={books} />
      ) : (
        <h2>You don't have favorite books</h2>
      )}
    </>
  );
};

export default Favorites;
