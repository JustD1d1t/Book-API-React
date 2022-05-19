import { createContext, useState } from "react";

const BookContext = createContext({
  favoriteBooks: [],
  toggleFavoriteBook: () => {},
});

export const BookContextProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const toggleFavoriteBook = (book) => {
    const isInFavoriteBooks = favoriteBooks.find(
      (favoriteBook) => favoriteBook.id === book.id
    );
    if (isInFavoriteBooks) {
      const indexOfBook = favoriteBooks.indexOf(book);
      const newFavoriteBooks = [...favoriteBooks];
      newFavoriteBooks.splice(indexOfBook, 1);
      setFavoriteBooks(newFavoriteBooks);
    } else {
      setFavoriteBooks([...favoriteBooks, book]);
    }
  };

  const context = {
    favoriteBooks: favoriteBooks,
    toggleFavoriteBook,
  };
  return (
    <BookContext.Provider value={context}>{children}</BookContext.Provider>
  );
};

export default BookContext;
