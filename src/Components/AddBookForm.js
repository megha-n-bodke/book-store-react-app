import React from "react";

const AddBookForm = () => (
  <form>
    <div className="form-group d-flex">
      <input type="text" placeholder="Book Title" />
      <div className="dropdown">
        <select name="category" id="cars">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </div>
      <button type="button">Add Book</button>
    </div>
  </form>
);

export default AddBookForm;
