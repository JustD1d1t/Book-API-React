import { useEffect, useState } from "react";

import BookList from "../../components/books/BookList";
import SearchEngine from "../../components/shared/SearchEngine/SearchEngine";

import bookService from "../../services/books";
import { links } from "../../config";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const search = useLocation().search;
  useEffect(() => {
    const offset = new URLSearchParams(search).get("page");
    let url;
    if (offset) {
      url = links.book + `/?page=${offset}`;
    } else {
      url = links.book;
    }
    const getBooks = async () => {
      const items = await bookService.getBooks(url);
      const nextPageIndex = items.next.indexOf("?page=");
      const nextPageOffset = items.next.slice(
        nextPageIndex + 6,
        items.next[-1]
      );
      setBooks(items.results);
      setNextPage(nextPageOffset);
    };
    getBooks();
  }, [search]);
  if (books.lenght === 0) {
    return (
      <>
        <h1>Books</h1>
        <p>No books!</p>
      </>
    );
  }
  return (
    <>
      <h1>Books</h1>
      <SearchEngine />
      <BookList books={books} nextPage={`?page=${nextPage}`} />
    </>
  );
};

export default MainPage;
