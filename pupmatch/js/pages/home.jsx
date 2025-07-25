import React from 'react';
import dogs from '../data/pupmatchFAKEDATA';
import DogCard from '../components/DogCard';

/* dla każdego psa w data tworzy DogCard i przekazuje propsy:
dog (dane psa) / 
toggleFavorite (zmienia stan) / 
isFavorite (sprawdza czy pies jest ulubiony) */

function Home({ favorites, toggleFavorite, isFavorite }) {
  return (
    <main className="home">
      <h2>List of dogs waiting for adoption</h2>
      <div className="dog-grid">
        {dogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
