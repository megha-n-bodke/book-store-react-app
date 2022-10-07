import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from './AddBookForm';
import Books from './Books';

const Booklist = () => {
  const books = useSelector((state) => state.book);
  return (
    <div>
      {books.map((book) => (
        <Books
          key={Math.random()}
          type="Action"
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
