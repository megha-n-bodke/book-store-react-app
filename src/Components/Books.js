import React from 'react';

const Books = (props) => {
  const { type, title, author } = props;

  return (
    <div>
      <h3>{type}</h3>
      <h3>{title}</h3>
      <h3>{author}</h3>

      <button type="button" className="btn btn-primary">
        Remove
      </button>
    </div>
  );
};
export default Books;
