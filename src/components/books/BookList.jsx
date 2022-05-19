import classes from "./BookList.module.scss";
import { Link } from "react-router-dom";

import BookItem from "./BookItem";

const BookList = ({ books, nextPage }) => {
  return (
    <>
      <ul className={classes.bookList}>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
      {nextPage && <Link to={nextPage}>Next page</Link>}
    </>
  );
};

export default BookList;
