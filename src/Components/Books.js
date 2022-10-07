import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    type, title, author, id,
  } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="border border-secondary rounded  w-75 my-3 ps-5">
        <p className="text-left">{type}</p>
        <p>{title}</p>
        <p>{author}</p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Books;
