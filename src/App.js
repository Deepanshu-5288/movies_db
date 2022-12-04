import './App.css';
import Home from './Home';
import SingleMovie from './SingleMovie';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<SingleMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
