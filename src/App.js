import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booklist from './Components/Booklist';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
