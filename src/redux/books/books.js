import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
const SHOW_BOOK = 'books/books/SHOW_BOOK';
const baseApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gPzOMZksyeRmN5CvYQTV/books';

// thunk
export const showBooks = createAsyncThunk(
  SHOW_BOOK,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseApi);
    const newData = Object.keys(data).map((key) => {
      const books = data[key][0];
      return {
        item_id: key,
        ...books,
      };
    });
    dispatch({
      type: SHOW_BOOK,
      payload: newData,
    });
  },
);

export const addBook = (data) => async (dispatch) => {
  await axios.post(baseApi, data);
  dispatch({
    type: ADD_BOOK,
  });
  dispatch(showBooks());
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${baseApi}/${id}`);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

const books = [];

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case SHOW_BOOK:
      return [...action.payload];

    default:
      return state;
  }
};

export default bookReducer;
