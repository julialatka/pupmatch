import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import DogDetails from './pages/dogdetails';
import Favorites from './pages/favorites';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dog/:id" element={<DogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
