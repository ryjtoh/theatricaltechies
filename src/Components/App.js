import logo from './logo.svg';
import './App.css';
import NavBar from './navBar';
import RssFeed from './feedPage/rssFeed';
import CompostBins from './homePage/compostBins';
import Intro from './homePage/intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Intro />} />
            <Route path="rssFeed" element={<RssFeed />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
