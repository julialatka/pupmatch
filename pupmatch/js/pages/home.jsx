import React from 'react';
import dogs from '../data/pupmatchFAKEDATA';
import DogCard from '../components/DogCard';

function Home() {
  return (
    <main className="home">
      <h2>Lista psów do adopcji</h2>
      <div className="dog-grid">
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </main>
  );
}

export default Home;
