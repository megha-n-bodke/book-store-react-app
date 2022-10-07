import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/books";

const AddBookForm = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
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
    dispatch(addBook(data));
  };
  return (
    <div>
      <form onSubmit={clickHandler}>
        <div className="form-group d-flex d-flex-row  justify-content-center align-content-between">
          <input
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
            />
          </div>
          <button type="submit" className="btn btn-primary ms-5">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
