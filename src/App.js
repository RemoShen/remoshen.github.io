import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Research from './components/Research/Research';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
