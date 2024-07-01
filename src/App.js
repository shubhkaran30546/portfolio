import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
// import About from './components/About'; // Assuming you have an About component

function App() {
  return (
    <body>
    <Router>
      <Navbar title="Home" className="navbar"/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
      <div className="bottom-line"></div>
    </Router>
    </body>
  );
}

export default App;
