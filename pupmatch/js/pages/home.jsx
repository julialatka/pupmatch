import React, { useState, useEffect } from 'react';
import getDogs from '../api/getDogs';
import DogCard from '../components/DogCard';

/* dla każdego psa w data tworzy DogCard i przekazuje propsy:
dog (dane psa) / 
toggleFavorite (zmienia stan) / 
isFavorite (sprawdza czy pies jest ulubiony) */

function Home({ toggleFavorite, isFavorite }) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const dogsData = await getDogs();
        setDogs(dogsData);
      } catch (error) {
        console.error('Error loading dogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) {
    return (
      <main className="home">
        <h2>List of dogs waiting for adoption</h2>
        <p>Loading dogs...</p>
      </main>
    );
  }

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
