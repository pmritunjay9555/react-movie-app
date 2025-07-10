import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourites from './Components/Favourites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
