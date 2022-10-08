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
        {/* progress bar try */}
        <div className="middle-section">
          <div className="wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="percentages">
            <h2>80%</h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="progress-section ">
          <p className="chapter-head">CURRENT CHAPTER</p>
          <p className="chapter-num common-styles">CHAPTER 17</p>
          <button type="submit" className="btn btn-primary">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};
export default Books;
