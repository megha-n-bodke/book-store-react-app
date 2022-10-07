import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showBooks } from "../redux/books/books";
import AddBookForm from "./AddBookForm";
import Books from "./Books";

const Booklist = () => {
  const books = useSelector((state) => state.book);
  console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBooks());
  }, []);
  return (
    <div>
      {books.map((book) => (
        <Books
          key={Math.random()}
          type={book.category}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Booklist;
