import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';
import './book.css';

const AddBookForm = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: 'Action',
  });

  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    const newData = {
      item_id: uuid(),
      ...data,
    };
    dispatch(addBook(newData));
  };
  return (
    <div className="book-form">
      <form onSubmit={clickHandler}>
        <h2>
          <span className="form-heading">ADD NEW BOOK</span>
        </h2>
        <div className="form-group d-flex d-flex-row">
          <input
            className="book-title"
            type="text"
            placeholder="Book Title"
            onChange={changeHandler}
            value={data.title}
            name="title"
          />
          <div>
            <input
              type="text"
              placeholder="Book Author"
              onChange={changeHandler}
              value={data.author}
              name="author"
              className="form-author"
            />
          </div>
          <button type="submit" className="btn btn-primary add-book">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
