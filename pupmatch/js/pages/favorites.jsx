import React from 'react';
import DogCard from '../components/DogCard';

function Favorites({ favorites, toggleFavorite, isFavorite }) {
  return (
    <main className="favorites-page">
      <h2>Your Favorite Dogs</h2>

      {favorites.length === 0 ? (
        <p>No favorite dogs yet.</p>
      ) : (
        <div className="dog-grid">
          {favorites.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
