// import './App.css';
import NavBar from './Components/navBar';
import RssFeed from './Components/feedPage/rssFeed';
import CompostBins from './Components/homePage/compostBins';
import Intro from './Components/homePage/intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

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
