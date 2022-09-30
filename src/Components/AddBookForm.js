import React from 'react';

const AddBookForm = () => (
  <div>
    <form>
      <div className="form-group d-flex d-flex-row  justify-content-center align-content-between">
        <input type="text" placeholder="Book Title" />
        <div>
          <select name="category" id="cars" className="dropdown ms-5 h-100">
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary ms-5">
          Add Book
        </button>
      </div>
    </form>
  </div>
);

export default AddBookForm;
