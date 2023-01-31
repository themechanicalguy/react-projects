import React, { useState } from "react";

const BookEdit = ({ book, onEdit, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onEdit();
    onSubmit(book.id, title);
    console.log("new title", title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
