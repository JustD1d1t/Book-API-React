import SearchEngine from "../../components/shared/SearchEngine/SearchEngine";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import BookList from "../../components/books/BookList";

import { links } from "../../config";

import bookService from "../../services/books";

const Search = (props) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const searchParam = urlParams.get("search");
  const pageParam = urlParams.get("page");
  let pageQuery = "";
  if (pageParam) {
    pageQuery = `page=${pageParam}&`;
  }

  useEffect(() => {
    const url = `${links.book}/?${
      pageParam ? pageQuery : ""
    }search=${searchParam}`;
    const getBooks = async () => {
      const data = await bookService.getBooks(url);
      const indexOfQueries = data.next.indexOf("?");
      const queries = data.next.slice(indexOfQueries, data.next.length);
      console.log(queries);
      setNextPage(queries);
      const books = data.results;
      setFilteredBooks(books);
    };
    getBooks();
  }, [searchParam, pageParam, pageQuery]);
  return (
    <>
      <h1>Search</h1>
      <SearchEngine />
      {filteredBooks.length !== 0 && (
        <BookList books={filteredBooks} nextPage={nextPage} />
      )}
    </>
  );
};

export default Search;
