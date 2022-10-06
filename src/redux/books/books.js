const ADD_BOOK = 'books / books / ADD_BOOK';
const REMOVE_BOOK = 'books / books / REMOVE_BOOK';
export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

const books = [];

const bookReducer = (state = books, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];

    case 'REMOVE_BOOK':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default bookReducer;
