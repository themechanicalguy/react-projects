import { useState, React, useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  // console.log(books);

  return (
    <div>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
