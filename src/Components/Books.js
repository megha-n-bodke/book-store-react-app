import React from "react";

const Books = (props) => {
  const { type, title, author } = props;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="border border-secondary rounded  w-75 my-3 ">
        <h3 className="text-left">{type}</h3>
        <h3>{title}</h3>
        <h3>{author}</h3>

        <button type="button" className="btn btn-primary">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Books;
