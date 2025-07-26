import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import DogDetails from './pages/dogdetails';
import Favorites from './pages/favorites';
import Contact from './pages/contact';

function App() {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(dog) {
    const alreadyFav = favorites.find((f) => f.id === dog.id);
    if (alreadyFav) {
      setFavorites(favorites.filter((f) => f.id !== dog.id));
    } else {
      setFavorites([...favorites, dog]);
    }
  }

  function isFavorite(dogId) {
    return favorites.some((f) => f.id === dogId);
  }


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dog/:id" element={<DogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
