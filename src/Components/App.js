// import './App.css';
import NavBar from './NavBar';
import RssFeed from './feedPage/RssFeed';
import CompostBins from './homePage/CompostBins';
import Intro from './homePage/Intro';
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
