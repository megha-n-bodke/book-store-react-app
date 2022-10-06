const categories = [];
const CHECK_STATUS = 'categories/categories / CHECK_STATUS';

export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

const categoryRducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryRducer;
