import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import JobSimulations from './pages/JobSimulations';
import Blogs from './pages/Blogs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/job-simulations" element={<JobSimulations />} />
          <Route path="/blogs" element={<Blogs/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;