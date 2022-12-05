import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

const BookList = () => {
  const { books } = useContext(BooksContext);
  const renderBooks = books.map((book, item) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
