// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LibraryPage from './pages/LibraryPage';
import CatalogPage from './pages/CatalogPage';
import { Loader } from '@react-three/drei';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
      <Loader />
    </Router>
  );
}

export default App;
