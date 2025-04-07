import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Community from './components/Community.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Recipes from './components/Recipes.jsx';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);


  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
