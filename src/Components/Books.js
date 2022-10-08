import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import "./book.css";
const Books = (props) => {
  const { type, title, author, id } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className="book-card">
        <div>
          {" "}
          <p className="category">{type}</p>
          <p className="Title">{title}</p>
          <p className="author">{author}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={clickHandler}
          >
            Remove
          </button>
        </div>
        <div class="Oval-2"></div>
      </div>
    </div>
  );
};
export default Books;
