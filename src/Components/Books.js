import React from 'react';

const Books = (props) => {
  const { type, title, author } = props;

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="border border-secondary rounded  w-75 my-3 ps-5">
        <p className="text-left">{type}</p>
        <p>{title}</p>
        <p>{author}</p>

        <button type="button" className="btn btn-primary">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Books;
