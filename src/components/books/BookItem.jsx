import { useContext, useState, useEffect } from "react";
import BookContext from "../../context/books/bookContext";
import classes from "./BookItem.module.scss";

const BookItem = (props) => {
  const bookContext = useContext(BookContext);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const {
    title,
    description,
    subjects,
    bookshelves,
    languages,
    agents,
    resources,
  } = props.book;

  useEffect(() => {
    const image = resources.find(
      (resource) =>
        (resource.type = "image/jpg" && resource.uri.includes("medium"))
    );
    const text = resources.find(
      (resource) =>
        (resource.type = "text/html" && resource.uri.includes(".htm"))
    );
    setImage(image);
    setText(text);
  }, [resources]);
  return (
    <div className={classes.bookItem}>
      <h2 className={classes.bookItem__title}>Title: {title}</h2>
      <div className={classes.bookItem__image}>
        <img src={image.uri} alt="" />
      </div>
      <div className={classes.bookItem__description}>
        {description && (
          <p>
            <b>Description:</b> {description}
          </p>
        )}
        <div className={classes.bookItem__container}>
          <span className={classes.bookItem__subjectTitle}>
            <b>Subjects:</b>
          </span>
          {subjects.map((subject, index) => (
            <span key={index} className={classes.bookItem__subject}>
              {subject};
            </span>
          ))}
        </div>
        <div className={classes.bookItem__container}>
          <span className={classes.bookItem__bookshelveTitle}>
            <b>Bookshelves:</b>
          </span>
          {bookshelves.map((bookshelve, index) => (
            <span key={index} className={classes.bookItem__bookshelve}>
              {bookshelve};
            </span>
          ))}
        </div>
        <div className={classes.bookItem__container}>
          <span className={classes.bookItem__languageTitle}>
            <b>Languages:</b>
          </span>
          {languages.map((language, index) => (
            <span key={index} className={classes.bookItem__language}>
              {language};
            </span>
          ))}
        </div>
        <div className={classes.bookItem__container}>
          {agents.map((agent, index) => (
            <p key={index}>
              <b>{agent.type}</b> : {agent.person}
            </p>
          ))}
        </div>
        <div className={classes.bookItem__container}>
          <button onClick={() => bookContext.toggleFavoriteBook(props.book)}>
            {bookContext.favoriteBooks.includes(props.book)
              ? "Remove from favorite"
              : "Add to favorite"}
          </button>
        </div>
        {text && text.uri && (
          <div className={classes.bookItem__container}>
            <a href={text.uri}>Read book</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookItem;
