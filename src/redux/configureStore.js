import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryRducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryRducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
