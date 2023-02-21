// import './App.css';
import NavBar from './Components/navBar';
import BlogFeed from './Components/feedPage/blogFeed';
import CompostBins from './Components/homePage/compostBins';
import Intro from './Components/homePage/intro';
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
            <Route path="BlogFeed" element={<BlogFeed />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
