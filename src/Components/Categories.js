import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <div>
        <button
          type="submit"
          className="btn btn-primary ms-5 my-5"
          onClick={clickHandler}
        >
          Check Status
        </button>
      </div>
      {categories.map((category) => (
        <p key={Math.random()}>{category}</p>
      ))}
    </>
  );
};

export default Categories;
