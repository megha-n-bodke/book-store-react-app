import React from 'react';
import Books from './Books';

const Booklist = () => (
  <div>
    <Books type="Action" title="The Hunger Game" author="Suzanne Collins" />
    <Books type="Science Fiction" title="Dune" author="Frank Herbert" />
    <Books
      type="Economy"
      title="Capital In Twenty-First Century"
      author="Suzanne Collins"
    />
  </div>
);

export default Booklist;
