import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <div className="category-data">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Check Status
        </button>

        {categories.map((category) => (
          <p key={Math.random()}>{category}</p>
        ))}
      </div>
    </>
  );
};

export default Categories;
