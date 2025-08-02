import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import DogDetails from './pages/dogdetails';
import Favorites from './pages/favorites';
import Contact from './pages/contact';
import NotFound from './pages/notfound';

function App() {
  // sprawdzamy ulubione z localstorage:
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  // zmiana favorites, powoduje zapisanie nowego stanu do localstorage:
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // funkcja do dodawania/usuwania psa z ulubionych:
  function toggleFavorite(dog) {
    const alreadyFav = favorites.find((f) => f.id === dog.id);
    if (alreadyFav) {
      setFavorites(favorites.filter((f) => f.id !== dog.id));
    } else {
      setFavorites([...favorites, dog]); // spread kopiuje istniejące i dodaje nowego psa
    }
  }

  // sprawdza czy dany pies jest w ulubionych:
  function isFavorite(dogId) {
    return favorites.some((f) => f.id === dogId); // some zwraca true/false
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
