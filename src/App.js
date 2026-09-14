import './App.css';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Research from './components/Research/Research';
import Talks from './components/Talks/Talks';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/about" element={<Navigate to="/talks" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
