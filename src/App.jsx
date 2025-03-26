import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import CatalogPage from './pages/CatalogPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
