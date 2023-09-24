import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home';
import All from './pages/All';
import Search from './pages/Search';
import Logo from  "./components/Logo";

function App() {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;