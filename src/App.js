// import './App.css';
import NavBar from './Components/NavBar';
import RssFeed from './Components/feedPage/RssFeed';
import CompostBins from './Components/homePage/CompostBins';
import Intro from './Components/homePage/Intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Intro />} />
            <Route path="CompostBins" element={<CompostBins />} />
            <Route path="RssFeed" element={<RssFeed />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
